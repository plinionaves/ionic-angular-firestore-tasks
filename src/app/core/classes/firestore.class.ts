import { AngularFirestore, AngularFirestoreCollection, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export abstract class Firestore<T extends { id: string }> {
  protected collection: AngularFirestoreCollection<T>;

  constructor(protected db: AngularFirestore) {}

  protected setCollection(path: string, queryFn?: QueryFn): void {
    this.collection = path ? this.db.collection(path, queryFn) : null;
  }

  private setItem(item: T, operation: 'set' | 'update'): Promise<T> {
    return this.collection
      .doc<T>(item.id)
      [operation](item)
      .then(() => item);
  }

  getAll(): Observable<T[]> {
    return this.collection.valueChanges();
  }

  create(item: T): Promise<T> {
    item.id = this.db.createId();
    return this.setItem(item, 'set');
  }
}
