import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type AssertAll<T extends ReadonlyArray<true>> = T
type Not<A extends boolean> = false extends A ? true : false
type IsNever<A> = [A] extends [never] ? true : false

type cases = [
  AssertAll<[
    Not<IsNegativeNumber<0>>,
    IsNever<IsNegativeNumber<number>>,
    IsNever<IsNegativeNumber<-1 | -2>>,
    IsNegativeNumber<-1>,
    IsNegativeNumber<-1.9>,
    IsNegativeNumber<-100_000_000>,
    Not<IsNegativeNumber<1>>,
    Not<IsNegativeNumber<1.9>>,
    Not<IsNegativeNumber<100_000_000>>,
  >
]>
