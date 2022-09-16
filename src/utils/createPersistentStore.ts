import { createEffect } from 'solid-js';
import { Store, SetStoreFunction, createStore } from 'solid-js/store';

type Params<T> = {
  initialState: T;
  name: string;
};

type ReturnType<T> = [Store<T>, SetStoreFunction<T>];

export const createPersistentStore = <T extends object>({
  initialState,
  name,
}: Params<T>): ReturnType<T> => {
  const [state, setState] = createStore(initialState);

  const persistedState = localStorage.getItem(name);

  if (persistedState) setState(JSON.parse(persistedState));

  createEffect(() => localStorage.setItem(name, JSON.stringify(state)));

  return [state, setState];
};
