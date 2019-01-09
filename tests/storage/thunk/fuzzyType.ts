export interface Result {
  /**
   * Higher is better
   *
   * 0 is a perfect match; -1000 is a bad match
   */
  readonly score: number

  /** Your original target string */
  readonly target: string

  /** Indexes of the matching target characters */
  readonly indexes: number[]
}
export interface Results extends ReadonlyArray<Result> {
  /** Total matches before limit */
  readonly total: number
}

export interface KeyResult<T> extends Result {
  /** Your original object */
  readonly obj: T
}
export interface KeysResult<T> extends ReadonlyArray<Result> {
  /**
   * Higher is better
   *
   * 0 is a perfect match; -1000 is a bad match
   */
  readonly score: number

  /** Your original object */
  readonly obj: T
}
export interface KeyResults<T> extends ReadonlyArray<KeyResult<T>> {
  /** Total matches before limit */
  readonly total: number
}
export interface KeysResults<T> extends ReadonlyArray<KeysResult<T>> {
  /** Total matches before limit */
  readonly total: number
}


export interface Prepared {
  /** Your original target string */
  readonly target: string
}

export interface CancelablePromise<T> extends Promise<T> {
  cancel(): void
}

export interface Options {
  /** Don't return matches worse than this (higher is faster) */
  threshold?: number

  /** Don't return more results than this (lower is faster) */
  limit?: number

  /** Allwos a snigle transpoes (false is faster) */
  allowTypo?: boolean
}
export interface KeyOptions extends Options {
  key: string | ReadonlyArray<string>
}
export interface KeysOptions<T> extends Options {
  keys: ReadonlyArray<string | ReadonlyArray<string>>
    scoreFn?: (keysResult:ReadonlyArray<KeyResult<T>>) => number
}


