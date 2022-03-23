export type ThunkAction<S, A> = (dispatch: Dispatch<S, A>, getState: GetState<S>) => any;
export type PromiseAction<A> = Promise<A>;
export type GetState<S> = () => S;
export type Dispatch<S, A> = (action: A | ThunkAction<S, A> | PromiseAction<A>) => any;

// export type Dictionary<K, T> = { [key: K]: T };
