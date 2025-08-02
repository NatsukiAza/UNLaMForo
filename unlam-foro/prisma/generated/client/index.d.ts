
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Posteo
 * 
 */
export type Posteo = $Result.DefaultSelection<Prisma.$PosteoPayload>
/**
 * Model Materia
 * 
 */
export type Materia = $Result.DefaultSelection<Prisma.$MateriaPayload>
/**
 * Model Comision
 * 
 */
export type Comision = $Result.DefaultSelection<Prisma.$ComisionPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posteo`: Exposes CRUD operations for the **Posteo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posteos
    * const posteos = await prisma.posteo.findMany()
    * ```
    */
  get posteo(): Prisma.PosteoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.MateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comision`: Exposes CRUD operations for the **Comision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comisions
    * const comisions = await prisma.comision.findMany()
    * ```
    */
  get comision(): Prisma.ComisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Posteo: 'Posteo',
    Materia: 'Materia',
    Comision: 'Comision',
    Vote: 'Vote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "posteo" | "materia" | "comision" | "vote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Posteo: {
        payload: Prisma.$PosteoPayload<ExtArgs>
        fields: Prisma.PosteoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PosteoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosteoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PosteoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosteoPayload>
          }
          findFirst: {
            args: Prisma.PosteoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosteoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PosteoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosteoPayload>
          }
          findMany: {
            args: Prisma.PosteoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosteoPayload>[]
          }
          create: {
            args: Prisma.PosteoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosteoPayload>
          }
          createMany: {
            args: Prisma.PosteoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PosteoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosteoPayload>
          }
          update: {
            args: Prisma.PosteoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosteoPayload>
          }
          deleteMany: {
            args: Prisma.PosteoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PosteoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PosteoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosteoPayload>
          }
          aggregate: {
            args: Prisma.PosteoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosteo>
          }
          groupBy: {
            args: Prisma.PosteoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PosteoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PosteoCountArgs<ExtArgs>
            result: $Utils.Optional<PosteoCountAggregateOutputType> | number
          }
        }
      }
      Materia: {
        payload: Prisma.$MateriaPayload<ExtArgs>
        fields: Prisma.MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findFirst: {
            args: Prisma.MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findMany: {
            args: Prisma.MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          create: {
            args: Prisma.MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          createMany: {
            args: Prisma.MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          update: {
            args: Prisma.MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      Comision: {
        payload: Prisma.$ComisionPayload<ExtArgs>
        fields: Prisma.ComisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComisionPayload>
          }
          findFirst: {
            args: Prisma.ComisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComisionPayload>
          }
          findMany: {
            args: Prisma.ComisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComisionPayload>[]
          }
          create: {
            args: Prisma.ComisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComisionPayload>
          }
          createMany: {
            args: Prisma.ComisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComisionPayload>
          }
          update: {
            args: Prisma.ComisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComisionPayload>
          }
          deleteMany: {
            args: Prisma.ComisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComisionPayload>
          }
          aggregate: {
            args: Prisma.ComisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComision>
          }
          groupBy: {
            args: Prisma.ComisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComisionCountArgs<ExtArgs>
            result: $Utils.Optional<ComisionCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    posteo?: PosteoOmit
    materia?: MateriaOmit
    comision?: ComisionOmit
    vote?: VoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posteos: number
    votos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posteos?: boolean | UserCountOutputTypeCountPosteosArgs
    votos?: boolean | UserCountOutputTypeCountVotosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPosteosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosteoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type PosteoCountOutputType
   */

  export type PosteoCountOutputType = {
    votos: number
  }

  export type PosteoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votos?: boolean | PosteoCountOutputTypeCountVotosArgs
  }

  // Custom InputTypes
  /**
   * PosteoCountOutputType without action
   */
  export type PosteoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosteoCountOutputType
     */
    select?: PosteoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PosteoCountOutputType without action
   */
  export type PosteoCountOutputTypeCountVotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type MateriaCountOutputType
   */

  export type MateriaCountOutputType = {
    comision: number
  }

  export type MateriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comision?: boolean | MateriaCountOutputTypeCountComisionArgs
  }

  // Custom InputTypes
  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaCountOutputType
     */
    select?: MateriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountComisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComisionWhereInput
  }


  /**
   * Count Type ComisionCountOutputType
   */

  export type ComisionCountOutputType = {
    posteos: number
  }

  export type ComisionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posteos?: boolean | ComisionCountOutputTypeCountPosteosArgs
  }

  // Custom InputTypes
  /**
   * ComisionCountOutputType without action
   */
  export type ComisionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComisionCountOutputType
     */
    select?: ComisionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComisionCountOutputType without action
   */
  export type ComisionCountOutputTypeCountPosteosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosteoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    creadoEn: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    resetTokenCreatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    creadoEn: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    resetTokenCreatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    creadoEn: number
    resetToken: number
    resetTokenExpiry: number
    resetTokenCreatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    creadoEn?: true
    resetToken?: true
    resetTokenExpiry?: true
    resetTokenCreatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    creadoEn?: true
    resetToken?: true
    resetTokenExpiry?: true
    resetTokenCreatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    creadoEn?: true
    resetToken?: true
    resetTokenExpiry?: true
    resetTokenCreatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    creadoEn: Date
    resetToken: string | null
    resetTokenExpiry: Date | null
    resetTokenCreatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    creadoEn?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    resetTokenCreatedAt?: boolean
    posteos?: boolean | User$posteosArgs<ExtArgs>
    votos?: boolean | User$votosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    creadoEn?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    resetTokenCreatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "creadoEn" | "resetToken" | "resetTokenExpiry" | "resetTokenCreatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posteos?: boolean | User$posteosArgs<ExtArgs>
    votos?: boolean | User$votosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posteos: Prisma.$PosteoPayload<ExtArgs>[]
      votos: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      creadoEn: Date
      resetToken: string | null
      resetTokenExpiry: Date | null
      resetTokenCreatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posteos<T extends User$posteosArgs<ExtArgs> = {}>(args?: Subset<T, User$posteosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votos<T extends User$votosArgs<ExtArgs> = {}>(args?: Subset<T, User$votosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly creadoEn: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly resetTokenCreatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posteos
   */
  export type User$posteosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
    where?: PosteoWhereInput
    orderBy?: PosteoOrderByWithRelationInput | PosteoOrderByWithRelationInput[]
    cursor?: PosteoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosteoScalarFieldEnum | PosteoScalarFieldEnum[]
  }

  /**
   * User.votos
   */
  export type User$votosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Posteo
   */

  export type AggregatePosteo = {
    _count: PosteoCountAggregateOutputType | null
    _avg: PosteoAvgAggregateOutputType | null
    _sum: PosteoSumAggregateOutputType | null
    _min: PosteoMinAggregateOutputType | null
    _max: PosteoMaxAggregateOutputType | null
  }

  export type PosteoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    comisionId: number | null
  }

  export type PosteoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    comisionId: number | null
  }

  export type PosteoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    contenido: string | null
    fecha: Date | null
    anonymousId: string | null
    usuarioId: number | null
    comisionId: number | null
  }

  export type PosteoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    contenido: string | null
    fecha: Date | null
    anonymousId: string | null
    usuarioId: number | null
    comisionId: number | null
  }

  export type PosteoCountAggregateOutputType = {
    id: number
    titulo: number
    contenido: number
    fecha: number
    anonymousId: number
    usuarioId: number
    comisionId: number
    _all: number
  }


  export type PosteoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    comisionId?: true
  }

  export type PosteoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    comisionId?: true
  }

  export type PosteoMinAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    fecha?: true
    anonymousId?: true
    usuarioId?: true
    comisionId?: true
  }

  export type PosteoMaxAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    fecha?: true
    anonymousId?: true
    usuarioId?: true
    comisionId?: true
  }

  export type PosteoCountAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    fecha?: true
    anonymousId?: true
    usuarioId?: true
    comisionId?: true
    _all?: true
  }

  export type PosteoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posteo to aggregate.
     */
    where?: PosteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posteos to fetch.
     */
    orderBy?: PosteoOrderByWithRelationInput | PosteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PosteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posteos
    **/
    _count?: true | PosteoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PosteoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PosteoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosteoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosteoMaxAggregateInputType
  }

  export type GetPosteoAggregateType<T extends PosteoAggregateArgs> = {
        [P in keyof T & keyof AggregatePosteo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosteo[P]>
      : GetScalarType<T[P], AggregatePosteo[P]>
  }




  export type PosteoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosteoWhereInput
    orderBy?: PosteoOrderByWithAggregationInput | PosteoOrderByWithAggregationInput[]
    by: PosteoScalarFieldEnum[] | PosteoScalarFieldEnum
    having?: PosteoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosteoCountAggregateInputType | true
    _avg?: PosteoAvgAggregateInputType
    _sum?: PosteoSumAggregateInputType
    _min?: PosteoMinAggregateInputType
    _max?: PosteoMaxAggregateInputType
  }

  export type PosteoGroupByOutputType = {
    id: number
    titulo: string
    contenido: string
    fecha: Date
    anonymousId: string | null
    usuarioId: number | null
    comisionId: number
    _count: PosteoCountAggregateOutputType | null
    _avg: PosteoAvgAggregateOutputType | null
    _sum: PosteoSumAggregateOutputType | null
    _min: PosteoMinAggregateOutputType | null
    _max: PosteoMaxAggregateOutputType | null
  }

  type GetPosteoGroupByPayload<T extends PosteoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosteoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosteoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosteoGroupByOutputType[P]>
            : GetScalarType<T[P], PosteoGroupByOutputType[P]>
        }
      >
    >


  export type PosteoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    fecha?: boolean
    anonymousId?: boolean
    usuarioId?: boolean
    comisionId?: boolean
    usuario?: boolean | Posteo$usuarioArgs<ExtArgs>
    comision?: boolean | ComisionDefaultArgs<ExtArgs>
    votos?: boolean | Posteo$votosArgs<ExtArgs>
    _count?: boolean | PosteoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posteo"]>



  export type PosteoSelectScalar = {
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    fecha?: boolean
    anonymousId?: boolean
    usuarioId?: boolean
    comisionId?: boolean
  }

  export type PosteoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "contenido" | "fecha" | "anonymousId" | "usuarioId" | "comisionId", ExtArgs["result"]["posteo"]>
  export type PosteoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Posteo$usuarioArgs<ExtArgs>
    comision?: boolean | ComisionDefaultArgs<ExtArgs>
    votos?: boolean | Posteo$votosArgs<ExtArgs>
    _count?: boolean | PosteoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PosteoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posteo"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs> | null
      comision: Prisma.$ComisionPayload<ExtArgs>
      votos: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      contenido: string
      fecha: Date
      anonymousId: string | null
      usuarioId: number | null
      comisionId: number
    }, ExtArgs["result"]["posteo"]>
    composites: {}
  }

  type PosteoGetPayload<S extends boolean | null | undefined | PosteoDefaultArgs> = $Result.GetResult<Prisma.$PosteoPayload, S>

  type PosteoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PosteoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PosteoCountAggregateInputType | true
    }

  export interface PosteoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posteo'], meta: { name: 'Posteo' } }
    /**
     * Find zero or one Posteo that matches the filter.
     * @param {PosteoFindUniqueArgs} args - Arguments to find a Posteo
     * @example
     * // Get one Posteo
     * const posteo = await prisma.posteo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PosteoFindUniqueArgs>(args: SelectSubset<T, PosteoFindUniqueArgs<ExtArgs>>): Prisma__PosteoClient<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posteo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PosteoFindUniqueOrThrowArgs} args - Arguments to find a Posteo
     * @example
     * // Get one Posteo
     * const posteo = await prisma.posteo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PosteoFindUniqueOrThrowArgs>(args: SelectSubset<T, PosteoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PosteoClient<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posteo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosteoFindFirstArgs} args - Arguments to find a Posteo
     * @example
     * // Get one Posteo
     * const posteo = await prisma.posteo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PosteoFindFirstArgs>(args?: SelectSubset<T, PosteoFindFirstArgs<ExtArgs>>): Prisma__PosteoClient<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posteo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosteoFindFirstOrThrowArgs} args - Arguments to find a Posteo
     * @example
     * // Get one Posteo
     * const posteo = await prisma.posteo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PosteoFindFirstOrThrowArgs>(args?: SelectSubset<T, PosteoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PosteoClient<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posteos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosteoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posteos
     * const posteos = await prisma.posteo.findMany()
     * 
     * // Get first 10 Posteos
     * const posteos = await prisma.posteo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posteoWithIdOnly = await prisma.posteo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PosteoFindManyArgs>(args?: SelectSubset<T, PosteoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posteo.
     * @param {PosteoCreateArgs} args - Arguments to create a Posteo.
     * @example
     * // Create one Posteo
     * const Posteo = await prisma.posteo.create({
     *   data: {
     *     // ... data to create a Posteo
     *   }
     * })
     * 
     */
    create<T extends PosteoCreateArgs>(args: SelectSubset<T, PosteoCreateArgs<ExtArgs>>): Prisma__PosteoClient<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posteos.
     * @param {PosteoCreateManyArgs} args - Arguments to create many Posteos.
     * @example
     * // Create many Posteos
     * const posteo = await prisma.posteo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PosteoCreateManyArgs>(args?: SelectSubset<T, PosteoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posteo.
     * @param {PosteoDeleteArgs} args - Arguments to delete one Posteo.
     * @example
     * // Delete one Posteo
     * const Posteo = await prisma.posteo.delete({
     *   where: {
     *     // ... filter to delete one Posteo
     *   }
     * })
     * 
     */
    delete<T extends PosteoDeleteArgs>(args: SelectSubset<T, PosteoDeleteArgs<ExtArgs>>): Prisma__PosteoClient<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posteo.
     * @param {PosteoUpdateArgs} args - Arguments to update one Posteo.
     * @example
     * // Update one Posteo
     * const posteo = await prisma.posteo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PosteoUpdateArgs>(args: SelectSubset<T, PosteoUpdateArgs<ExtArgs>>): Prisma__PosteoClient<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posteos.
     * @param {PosteoDeleteManyArgs} args - Arguments to filter Posteos to delete.
     * @example
     * // Delete a few Posteos
     * const { count } = await prisma.posteo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PosteoDeleteManyArgs>(args?: SelectSubset<T, PosteoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posteos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosteoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posteos
     * const posteo = await prisma.posteo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PosteoUpdateManyArgs>(args: SelectSubset<T, PosteoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posteo.
     * @param {PosteoUpsertArgs} args - Arguments to update or create a Posteo.
     * @example
     * // Update or create a Posteo
     * const posteo = await prisma.posteo.upsert({
     *   create: {
     *     // ... data to create a Posteo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posteo we want to update
     *   }
     * })
     */
    upsert<T extends PosteoUpsertArgs>(args: SelectSubset<T, PosteoUpsertArgs<ExtArgs>>): Prisma__PosteoClient<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posteos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosteoCountArgs} args - Arguments to filter Posteos to count.
     * @example
     * // Count the number of Posteos
     * const count = await prisma.posteo.count({
     *   where: {
     *     // ... the filter for the Posteos we want to count
     *   }
     * })
    **/
    count<T extends PosteoCountArgs>(
      args?: Subset<T, PosteoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosteoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posteo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosteoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PosteoAggregateArgs>(args: Subset<T, PosteoAggregateArgs>): Prisma.PrismaPromise<GetPosteoAggregateType<T>>

    /**
     * Group by Posteo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosteoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PosteoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosteoGroupByArgs['orderBy'] }
        : { orderBy?: PosteoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PosteoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosteoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posteo model
   */
  readonly fields: PosteoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posteo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PosteoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Posteo$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Posteo$usuarioArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comision<T extends ComisionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComisionDefaultArgs<ExtArgs>>): Prisma__ComisionClient<$Result.GetResult<Prisma.$ComisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votos<T extends Posteo$votosArgs<ExtArgs> = {}>(args?: Subset<T, Posteo$votosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Posteo model
   */
  interface PosteoFieldRefs {
    readonly id: FieldRef<"Posteo", 'Int'>
    readonly titulo: FieldRef<"Posteo", 'String'>
    readonly contenido: FieldRef<"Posteo", 'String'>
    readonly fecha: FieldRef<"Posteo", 'DateTime'>
    readonly anonymousId: FieldRef<"Posteo", 'String'>
    readonly usuarioId: FieldRef<"Posteo", 'Int'>
    readonly comisionId: FieldRef<"Posteo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Posteo findUnique
   */
  export type PosteoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
    /**
     * Filter, which Posteo to fetch.
     */
    where: PosteoWhereUniqueInput
  }

  /**
   * Posteo findUniqueOrThrow
   */
  export type PosteoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
    /**
     * Filter, which Posteo to fetch.
     */
    where: PosteoWhereUniqueInput
  }

  /**
   * Posteo findFirst
   */
  export type PosteoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
    /**
     * Filter, which Posteo to fetch.
     */
    where?: PosteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posteos to fetch.
     */
    orderBy?: PosteoOrderByWithRelationInput | PosteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posteos.
     */
    cursor?: PosteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posteos.
     */
    distinct?: PosteoScalarFieldEnum | PosteoScalarFieldEnum[]
  }

  /**
   * Posteo findFirstOrThrow
   */
  export type PosteoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
    /**
     * Filter, which Posteo to fetch.
     */
    where?: PosteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posteos to fetch.
     */
    orderBy?: PosteoOrderByWithRelationInput | PosteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posteos.
     */
    cursor?: PosteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posteos.
     */
    distinct?: PosteoScalarFieldEnum | PosteoScalarFieldEnum[]
  }

  /**
   * Posteo findMany
   */
  export type PosteoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
    /**
     * Filter, which Posteos to fetch.
     */
    where?: PosteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posteos to fetch.
     */
    orderBy?: PosteoOrderByWithRelationInput | PosteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posteos.
     */
    cursor?: PosteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posteos.
     */
    skip?: number
    distinct?: PosteoScalarFieldEnum | PosteoScalarFieldEnum[]
  }

  /**
   * Posteo create
   */
  export type PosteoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
    /**
     * The data needed to create a Posteo.
     */
    data: XOR<PosteoCreateInput, PosteoUncheckedCreateInput>
  }

  /**
   * Posteo createMany
   */
  export type PosteoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posteos.
     */
    data: PosteoCreateManyInput | PosteoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posteo update
   */
  export type PosteoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
    /**
     * The data needed to update a Posteo.
     */
    data: XOR<PosteoUpdateInput, PosteoUncheckedUpdateInput>
    /**
     * Choose, which Posteo to update.
     */
    where: PosteoWhereUniqueInput
  }

  /**
   * Posteo updateMany
   */
  export type PosteoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posteos.
     */
    data: XOR<PosteoUpdateManyMutationInput, PosteoUncheckedUpdateManyInput>
    /**
     * Filter which Posteos to update
     */
    where?: PosteoWhereInput
    /**
     * Limit how many Posteos to update.
     */
    limit?: number
  }

  /**
   * Posteo upsert
   */
  export type PosteoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
    /**
     * The filter to search for the Posteo to update in case it exists.
     */
    where: PosteoWhereUniqueInput
    /**
     * In case the Posteo found by the `where` argument doesn't exist, create a new Posteo with this data.
     */
    create: XOR<PosteoCreateInput, PosteoUncheckedCreateInput>
    /**
     * In case the Posteo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PosteoUpdateInput, PosteoUncheckedUpdateInput>
  }

  /**
   * Posteo delete
   */
  export type PosteoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
    /**
     * Filter which Posteo to delete.
     */
    where: PosteoWhereUniqueInput
  }

  /**
   * Posteo deleteMany
   */
  export type PosteoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posteos to delete
     */
    where?: PosteoWhereInput
    /**
     * Limit how many Posteos to delete.
     */
    limit?: number
  }

  /**
   * Posteo.usuario
   */
  export type Posteo$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Posteo.votos
   */
  export type Posteo$votosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Posteo without action
   */
  export type PosteoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
  }


  /**
   * Model Materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaAvgAggregateOutputType = {
    codigo: number | null
    anio: number | null
  }

  export type MateriaSumAggregateOutputType = {
    codigo: number | null
    anio: number | null
  }

  export type MateriaMinAggregateOutputType = {
    codigo: number | null
    name: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type MateriaMaxAggregateOutputType = {
    codigo: number | null
    name: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type MateriaCountAggregateOutputType = {
    codigo: number
    name: number
    anio: number
    createdAt: number
    _all: number
  }


  export type MateriaAvgAggregateInputType = {
    codigo?: true
    anio?: true
  }

  export type MateriaSumAggregateInputType = {
    codigo?: true
    anio?: true
  }

  export type MateriaMinAggregateInputType = {
    codigo?: true
    name?: true
    anio?: true
    createdAt?: true
  }

  export type MateriaMaxAggregateInputType = {
    codigo?: true
    name?: true
    anio?: true
    createdAt?: true
  }

  export type MateriaCountAggregateInputType = {
    codigo?: true
    name?: true
    anio?: true
    createdAt?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia to aggregate.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithAggregationInput | MateriaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _avg?: MateriaAvgAggregateInputType
    _sum?: MateriaSumAggregateInputType
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    codigo: number
    name: string
    anio: number
    createdAt: Date
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    name?: boolean
    anio?: boolean
    createdAt?: boolean
    comision?: boolean | Materia$comisionArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>



  export type MateriaSelectScalar = {
    codigo?: boolean
    name?: boolean
    anio?: boolean
    createdAt?: boolean
  }

  export type MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigo" | "name" | "anio" | "createdAt", ExtArgs["result"]["materia"]>
  export type MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comision?: boolean | Materia$comisionArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia"
    objects: {
      comision: Prisma.$ComisionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      codigo: number
      name: string
      anio: number
      createdAt: Date
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type MateriaGetPayload<S extends boolean | null | undefined | MateriaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPayload, S>

  type MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia'], meta: { name: 'Materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {MateriaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaFindUniqueArgs>(args: SelectSubset<T, MateriaFindUniqueArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaFindFirstArgs>(args?: SelectSubset<T, MateriaFindFirstArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const materiaWithCodigoOnly = await prisma.materia.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends MateriaFindManyArgs>(args?: SelectSubset<T, MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia.
     * @param {MateriaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends MateriaCreateArgs>(args: SelectSubset<T, MateriaCreateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {MateriaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaCreateManyArgs>(args?: SelectSubset<T, MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Materia.
     * @param {MateriaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends MateriaDeleteArgs>(args: SelectSubset<T, MateriaDeleteArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia.
     * @param {MateriaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaUpdateArgs>(args: SelectSubset<T, MateriaUpdateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {MateriaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDeleteManyArgs>(args?: SelectSubset<T, MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaUpdateManyArgs>(args: SelectSubset<T, MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Materia.
     * @param {MateriaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends MateriaUpsertArgs>(args: SelectSubset<T, MateriaUpsertArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriaCountArgs>(
      args?: Subset<T, MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia model
   */
  readonly fields: MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comision<T extends Materia$comisionArgs<ExtArgs> = {}>(args?: Subset<T, Materia$comisionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materia model
   */
  interface MateriaFieldRefs {
    readonly codigo: FieldRef<"Materia", 'Int'>
    readonly name: FieldRef<"Materia", 'String'>
    readonly anio: FieldRef<"Materia", 'Int'>
    readonly createdAt: FieldRef<"Materia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Materia findUnique
   */
  export type MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findUniqueOrThrow
   */
  export type MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findFirst
   */
  export type MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findFirstOrThrow
   */
  export type MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findMany
   */
  export type MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia create
   */
  export type MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia.
     */
    data: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
  }

  /**
   * Materia createMany
   */
  export type MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia update
   */
  export type MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia.
     */
    data: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
    /**
     * Choose, which Materia to update.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia updateMany
   */
  export type MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia upsert
   */
  export type MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia to update in case it exists.
     */
    where: MateriaWhereUniqueInput
    /**
     * In case the Materia found by the `where` argument doesn't exist, create a new Materia with this data.
     */
    create: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
    /**
     * In case the Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
  }

  /**
   * Materia delete
   */
  export type MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter which Materia to delete.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia deleteMany
   */
  export type MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to delete.
     */
    limit?: number
  }

  /**
   * Materia.comision
   */
  export type Materia$comisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comision
     */
    select?: ComisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comision
     */
    omit?: ComisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComisionInclude<ExtArgs> | null
    where?: ComisionWhereInput
    orderBy?: ComisionOrderByWithRelationInput | ComisionOrderByWithRelationInput[]
    cursor?: ComisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComisionScalarFieldEnum | ComisionScalarFieldEnum[]
  }

  /**
   * Materia without action
   */
  export type MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
  }


  /**
   * Model Comision
   */

  export type AggregateComision = {
    _count: ComisionCountAggregateOutputType | null
    _avg: ComisionAvgAggregateOutputType | null
    _sum: ComisionSumAggregateOutputType | null
    _min: ComisionMinAggregateOutputType | null
    _max: ComisionMaxAggregateOutputType | null
  }

  export type ComisionAvgAggregateOutputType = {
    id: number | null
    codigo: number | null
    materiaId: number | null
  }

  export type ComisionSumAggregateOutputType = {
    id: number | null
    codigo: number | null
    materiaId: number | null
  }

  export type ComisionMinAggregateOutputType = {
    id: number | null
    profes: string | null
    codigo: number | null
    createdAt: Date | null
    materiaId: number | null
  }

  export type ComisionMaxAggregateOutputType = {
    id: number | null
    profes: string | null
    codigo: number | null
    createdAt: Date | null
    materiaId: number | null
  }

  export type ComisionCountAggregateOutputType = {
    id: number
    profes: number
    codigo: number
    createdAt: number
    materiaId: number
    _all: number
  }


  export type ComisionAvgAggregateInputType = {
    id?: true
    codigo?: true
    materiaId?: true
  }

  export type ComisionSumAggregateInputType = {
    id?: true
    codigo?: true
    materiaId?: true
  }

  export type ComisionMinAggregateInputType = {
    id?: true
    profes?: true
    codigo?: true
    createdAt?: true
    materiaId?: true
  }

  export type ComisionMaxAggregateInputType = {
    id?: true
    profes?: true
    codigo?: true
    createdAt?: true
    materiaId?: true
  }

  export type ComisionCountAggregateInputType = {
    id?: true
    profes?: true
    codigo?: true
    createdAt?: true
    materiaId?: true
    _all?: true
  }

  export type ComisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comision to aggregate.
     */
    where?: ComisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comisions to fetch.
     */
    orderBy?: ComisionOrderByWithRelationInput | ComisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comisions
    **/
    _count?: true | ComisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComisionMaxAggregateInputType
  }

  export type GetComisionAggregateType<T extends ComisionAggregateArgs> = {
        [P in keyof T & keyof AggregateComision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComision[P]>
      : GetScalarType<T[P], AggregateComision[P]>
  }




  export type ComisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComisionWhereInput
    orderBy?: ComisionOrderByWithAggregationInput | ComisionOrderByWithAggregationInput[]
    by: ComisionScalarFieldEnum[] | ComisionScalarFieldEnum
    having?: ComisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComisionCountAggregateInputType | true
    _avg?: ComisionAvgAggregateInputType
    _sum?: ComisionSumAggregateInputType
    _min?: ComisionMinAggregateInputType
    _max?: ComisionMaxAggregateInputType
  }

  export type ComisionGroupByOutputType = {
    id: number
    profes: string
    codigo: number
    createdAt: Date
    materiaId: number
    _count: ComisionCountAggregateOutputType | null
    _avg: ComisionAvgAggregateOutputType | null
    _sum: ComisionSumAggregateOutputType | null
    _min: ComisionMinAggregateOutputType | null
    _max: ComisionMaxAggregateOutputType | null
  }

  type GetComisionGroupByPayload<T extends ComisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComisionGroupByOutputType[P]>
            : GetScalarType<T[P], ComisionGroupByOutputType[P]>
        }
      >
    >


  export type ComisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profes?: boolean
    codigo?: boolean
    createdAt?: boolean
    materiaId?: boolean
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    posteos?: boolean | Comision$posteosArgs<ExtArgs>
    _count?: boolean | ComisionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comision"]>



  export type ComisionSelectScalar = {
    id?: boolean
    profes?: boolean
    codigo?: boolean
    createdAt?: boolean
    materiaId?: boolean
  }

  export type ComisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profes" | "codigo" | "createdAt" | "materiaId", ExtArgs["result"]["comision"]>
  export type ComisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    posteos?: boolean | Comision$posteosArgs<ExtArgs>
    _count?: boolean | ComisionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ComisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comision"
    objects: {
      materia: Prisma.$MateriaPayload<ExtArgs>
      posteos: Prisma.$PosteoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      profes: string
      codigo: number
      createdAt: Date
      materiaId: number
    }, ExtArgs["result"]["comision"]>
    composites: {}
  }

  type ComisionGetPayload<S extends boolean | null | undefined | ComisionDefaultArgs> = $Result.GetResult<Prisma.$ComisionPayload, S>

  type ComisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComisionCountAggregateInputType | true
    }

  export interface ComisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comision'], meta: { name: 'Comision' } }
    /**
     * Find zero or one Comision that matches the filter.
     * @param {ComisionFindUniqueArgs} args - Arguments to find a Comision
     * @example
     * // Get one Comision
     * const comision = await prisma.comision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComisionFindUniqueArgs>(args: SelectSubset<T, ComisionFindUniqueArgs<ExtArgs>>): Prisma__ComisionClient<$Result.GetResult<Prisma.$ComisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComisionFindUniqueOrThrowArgs} args - Arguments to find a Comision
     * @example
     * // Get one Comision
     * const comision = await prisma.comision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComisionFindUniqueOrThrowArgs>(args: SelectSubset<T, ComisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComisionClient<$Result.GetResult<Prisma.$ComisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComisionFindFirstArgs} args - Arguments to find a Comision
     * @example
     * // Get one Comision
     * const comision = await prisma.comision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComisionFindFirstArgs>(args?: SelectSubset<T, ComisionFindFirstArgs<ExtArgs>>): Prisma__ComisionClient<$Result.GetResult<Prisma.$ComisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComisionFindFirstOrThrowArgs} args - Arguments to find a Comision
     * @example
     * // Get one Comision
     * const comision = await prisma.comision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComisionFindFirstOrThrowArgs>(args?: SelectSubset<T, ComisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComisionClient<$Result.GetResult<Prisma.$ComisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comisions
     * const comisions = await prisma.comision.findMany()
     * 
     * // Get first 10 Comisions
     * const comisions = await prisma.comision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comisionWithIdOnly = await prisma.comision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComisionFindManyArgs>(args?: SelectSubset<T, ComisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comision.
     * @param {ComisionCreateArgs} args - Arguments to create a Comision.
     * @example
     * // Create one Comision
     * const Comision = await prisma.comision.create({
     *   data: {
     *     // ... data to create a Comision
     *   }
     * })
     * 
     */
    create<T extends ComisionCreateArgs>(args: SelectSubset<T, ComisionCreateArgs<ExtArgs>>): Prisma__ComisionClient<$Result.GetResult<Prisma.$ComisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comisions.
     * @param {ComisionCreateManyArgs} args - Arguments to create many Comisions.
     * @example
     * // Create many Comisions
     * const comision = await prisma.comision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComisionCreateManyArgs>(args?: SelectSubset<T, ComisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comision.
     * @param {ComisionDeleteArgs} args - Arguments to delete one Comision.
     * @example
     * // Delete one Comision
     * const Comision = await prisma.comision.delete({
     *   where: {
     *     // ... filter to delete one Comision
     *   }
     * })
     * 
     */
    delete<T extends ComisionDeleteArgs>(args: SelectSubset<T, ComisionDeleteArgs<ExtArgs>>): Prisma__ComisionClient<$Result.GetResult<Prisma.$ComisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comision.
     * @param {ComisionUpdateArgs} args - Arguments to update one Comision.
     * @example
     * // Update one Comision
     * const comision = await prisma.comision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComisionUpdateArgs>(args: SelectSubset<T, ComisionUpdateArgs<ExtArgs>>): Prisma__ComisionClient<$Result.GetResult<Prisma.$ComisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comisions.
     * @param {ComisionDeleteManyArgs} args - Arguments to filter Comisions to delete.
     * @example
     * // Delete a few Comisions
     * const { count } = await prisma.comision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComisionDeleteManyArgs>(args?: SelectSubset<T, ComisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comisions
     * const comision = await prisma.comision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComisionUpdateManyArgs>(args: SelectSubset<T, ComisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comision.
     * @param {ComisionUpsertArgs} args - Arguments to update or create a Comision.
     * @example
     * // Update or create a Comision
     * const comision = await prisma.comision.upsert({
     *   create: {
     *     // ... data to create a Comision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comision we want to update
     *   }
     * })
     */
    upsert<T extends ComisionUpsertArgs>(args: SelectSubset<T, ComisionUpsertArgs<ExtArgs>>): Prisma__ComisionClient<$Result.GetResult<Prisma.$ComisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComisionCountArgs} args - Arguments to filter Comisions to count.
     * @example
     * // Count the number of Comisions
     * const count = await prisma.comision.count({
     *   where: {
     *     // ... the filter for the Comisions we want to count
     *   }
     * })
    **/
    count<T extends ComisionCountArgs>(
      args?: Subset<T, ComisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComisionAggregateArgs>(args: Subset<T, ComisionAggregateArgs>): Prisma.PrismaPromise<GetComisionAggregateType<T>>

    /**
     * Group by Comision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComisionGroupByArgs['orderBy'] }
        : { orderBy?: ComisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comision model
   */
  readonly fields: ComisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    posteos<T extends Comision$posteosArgs<ExtArgs> = {}>(args?: Subset<T, Comision$posteosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comision model
   */
  interface ComisionFieldRefs {
    readonly id: FieldRef<"Comision", 'Int'>
    readonly profes: FieldRef<"Comision", 'String'>
    readonly codigo: FieldRef<"Comision", 'Int'>
    readonly createdAt: FieldRef<"Comision", 'DateTime'>
    readonly materiaId: FieldRef<"Comision", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comision findUnique
   */
  export type ComisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comision
     */
    select?: ComisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comision
     */
    omit?: ComisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComisionInclude<ExtArgs> | null
    /**
     * Filter, which Comision to fetch.
     */
    where: ComisionWhereUniqueInput
  }

  /**
   * Comision findUniqueOrThrow
   */
  export type ComisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comision
     */
    select?: ComisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comision
     */
    omit?: ComisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComisionInclude<ExtArgs> | null
    /**
     * Filter, which Comision to fetch.
     */
    where: ComisionWhereUniqueInput
  }

  /**
   * Comision findFirst
   */
  export type ComisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comision
     */
    select?: ComisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comision
     */
    omit?: ComisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComisionInclude<ExtArgs> | null
    /**
     * Filter, which Comision to fetch.
     */
    where?: ComisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comisions to fetch.
     */
    orderBy?: ComisionOrderByWithRelationInput | ComisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comisions.
     */
    cursor?: ComisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comisions.
     */
    distinct?: ComisionScalarFieldEnum | ComisionScalarFieldEnum[]
  }

  /**
   * Comision findFirstOrThrow
   */
  export type ComisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comision
     */
    select?: ComisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comision
     */
    omit?: ComisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComisionInclude<ExtArgs> | null
    /**
     * Filter, which Comision to fetch.
     */
    where?: ComisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comisions to fetch.
     */
    orderBy?: ComisionOrderByWithRelationInput | ComisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comisions.
     */
    cursor?: ComisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comisions.
     */
    distinct?: ComisionScalarFieldEnum | ComisionScalarFieldEnum[]
  }

  /**
   * Comision findMany
   */
  export type ComisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comision
     */
    select?: ComisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comision
     */
    omit?: ComisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComisionInclude<ExtArgs> | null
    /**
     * Filter, which Comisions to fetch.
     */
    where?: ComisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comisions to fetch.
     */
    orderBy?: ComisionOrderByWithRelationInput | ComisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comisions.
     */
    cursor?: ComisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comisions.
     */
    skip?: number
    distinct?: ComisionScalarFieldEnum | ComisionScalarFieldEnum[]
  }

  /**
   * Comision create
   */
  export type ComisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comision
     */
    select?: ComisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comision
     */
    omit?: ComisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Comision.
     */
    data: XOR<ComisionCreateInput, ComisionUncheckedCreateInput>
  }

  /**
   * Comision createMany
   */
  export type ComisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comisions.
     */
    data: ComisionCreateManyInput | ComisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comision update
   */
  export type ComisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comision
     */
    select?: ComisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comision
     */
    omit?: ComisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Comision.
     */
    data: XOR<ComisionUpdateInput, ComisionUncheckedUpdateInput>
    /**
     * Choose, which Comision to update.
     */
    where: ComisionWhereUniqueInput
  }

  /**
   * Comision updateMany
   */
  export type ComisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comisions.
     */
    data: XOR<ComisionUpdateManyMutationInput, ComisionUncheckedUpdateManyInput>
    /**
     * Filter which Comisions to update
     */
    where?: ComisionWhereInput
    /**
     * Limit how many Comisions to update.
     */
    limit?: number
  }

  /**
   * Comision upsert
   */
  export type ComisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comision
     */
    select?: ComisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comision
     */
    omit?: ComisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Comision to update in case it exists.
     */
    where: ComisionWhereUniqueInput
    /**
     * In case the Comision found by the `where` argument doesn't exist, create a new Comision with this data.
     */
    create: XOR<ComisionCreateInput, ComisionUncheckedCreateInput>
    /**
     * In case the Comision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComisionUpdateInput, ComisionUncheckedUpdateInput>
  }

  /**
   * Comision delete
   */
  export type ComisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comision
     */
    select?: ComisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comision
     */
    omit?: ComisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComisionInclude<ExtArgs> | null
    /**
     * Filter which Comision to delete.
     */
    where: ComisionWhereUniqueInput
  }

  /**
   * Comision deleteMany
   */
  export type ComisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comisions to delete
     */
    where?: ComisionWhereInput
    /**
     * Limit how many Comisions to delete.
     */
    limit?: number
  }

  /**
   * Comision.posteos
   */
  export type Comision$posteosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posteo
     */
    select?: PosteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posteo
     */
    omit?: PosteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosteoInclude<ExtArgs> | null
    where?: PosteoWhereInput
    orderBy?: PosteoOrderByWithRelationInput | PosteoOrderByWithRelationInput[]
    cursor?: PosteoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosteoScalarFieldEnum | PosteoScalarFieldEnum[]
  }

  /**
   * Comision without action
   */
  export type ComisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comision
     */
    select?: ComisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comision
     */
    omit?: ComisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComisionInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteAvgAggregateOutputType = {
    id: number | null
    value: number | null
    userId: number | null
    postId: number | null
  }

  export type VoteSumAggregateOutputType = {
    id: number | null
    value: number | null
    userId: number | null
    postId: number | null
  }

  export type VoteMinAggregateOutputType = {
    id: number | null
    value: number | null
    userId: number | null
    postId: number | null
  }

  export type VoteMaxAggregateOutputType = {
    id: number | null
    value: number | null
    userId: number | null
    postId: number | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    value: number
    userId: number
    postId: number
    _all: number
  }


  export type VoteAvgAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    postId?: true
  }

  export type VoteSumAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    postId?: true
  }

  export type VoteMinAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    postId?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    postId?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _avg?: VoteAvgAggregateInputType
    _sum?: VoteSumAggregateInputType
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: number
    value: number
    userId: number
    postId: number
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PosteoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>



  export type VoteSelectScalar = {
    id?: boolean
    value?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "userId" | "postId", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PosteoDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PosteoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      value: number
      userId: number
      postId: number
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PosteoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PosteoDefaultArgs<ExtArgs>>): Prisma__PosteoClient<$Result.GetResult<Prisma.$PosteoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'Int'>
    readonly value: FieldRef<"Vote", 'Int'>
    readonly userId: FieldRef<"Vote", 'Int'>
    readonly postId: FieldRef<"Vote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    creadoEn: 'creadoEn',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    resetTokenCreatedAt: 'resetTokenCreatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PosteoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    contenido: 'contenido',
    fecha: 'fecha',
    anonymousId: 'anonymousId',
    usuarioId: 'usuarioId',
    comisionId: 'comisionId'
  };

  export type PosteoScalarFieldEnum = (typeof PosteoScalarFieldEnum)[keyof typeof PosteoScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    codigo: 'codigo',
    name: 'name',
    anio: 'anio',
    createdAt: 'createdAt'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const ComisionScalarFieldEnum: {
    id: 'id',
    profes: 'profes',
    codigo: 'codigo',
    createdAt: 'createdAt',
    materiaId: 'materiaId'
  };

  export type ComisionScalarFieldEnum = (typeof ComisionScalarFieldEnum)[keyof typeof ComisionScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    value: 'value',
    userId: 'userId',
    postId: 'postId'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    resetToken: 'resetToken'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PosteoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    contenido: 'contenido',
    anonymousId: 'anonymousId'
  };

  export type PosteoOrderByRelevanceFieldEnum = (typeof PosteoOrderByRelevanceFieldEnum)[keyof typeof PosteoOrderByRelevanceFieldEnum]


  export const MateriaOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type MateriaOrderByRelevanceFieldEnum = (typeof MateriaOrderByRelevanceFieldEnum)[keyof typeof MateriaOrderByRelevanceFieldEnum]


  export const ComisionOrderByRelevanceFieldEnum: {
    profes: 'profes'
  };

  export type ComisionOrderByRelevanceFieldEnum = (typeof ComisionOrderByRelevanceFieldEnum)[keyof typeof ComisionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    creadoEn?: DateTimeFilter<"User"> | Date | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    resetTokenCreatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    posteos?: PosteoListRelationFilter
    votos?: VoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    creadoEn?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    resetTokenCreatedAt?: SortOrderInput | SortOrder
    posteos?: PosteoOrderByRelationAggregateInput
    votos?: VoteOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    creadoEn?: DateTimeFilter<"User"> | Date | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    resetTokenCreatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    posteos?: PosteoListRelationFilter
    votos?: VoteListRelationFilter
  }, "id" | "name" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    creadoEn?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    resetTokenCreatedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    creadoEn?: DateTimeWithAggregatesFilter<"User"> | Date | string
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetTokenCreatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type PosteoWhereInput = {
    AND?: PosteoWhereInput | PosteoWhereInput[]
    OR?: PosteoWhereInput[]
    NOT?: PosteoWhereInput | PosteoWhereInput[]
    id?: IntFilter<"Posteo"> | number
    titulo?: StringFilter<"Posteo"> | string
    contenido?: StringFilter<"Posteo"> | string
    fecha?: DateTimeFilter<"Posteo"> | Date | string
    anonymousId?: StringNullableFilter<"Posteo"> | string | null
    usuarioId?: IntNullableFilter<"Posteo"> | number | null
    comisionId?: IntFilter<"Posteo"> | number
    usuario?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comision?: XOR<ComisionScalarRelationFilter, ComisionWhereInput>
    votos?: VoteListRelationFilter
  }

  export type PosteoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    anonymousId?: SortOrderInput | SortOrder
    usuarioId?: SortOrderInput | SortOrder
    comisionId?: SortOrder
    usuario?: UserOrderByWithRelationInput
    comision?: ComisionOrderByWithRelationInput
    votos?: VoteOrderByRelationAggregateInput
    _relevance?: PosteoOrderByRelevanceInput
  }

  export type PosteoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PosteoWhereInput | PosteoWhereInput[]
    OR?: PosteoWhereInput[]
    NOT?: PosteoWhereInput | PosteoWhereInput[]
    titulo?: StringFilter<"Posteo"> | string
    contenido?: StringFilter<"Posteo"> | string
    fecha?: DateTimeFilter<"Posteo"> | Date | string
    anonymousId?: StringNullableFilter<"Posteo"> | string | null
    usuarioId?: IntNullableFilter<"Posteo"> | number | null
    comisionId?: IntFilter<"Posteo"> | number
    usuario?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comision?: XOR<ComisionScalarRelationFilter, ComisionWhereInput>
    votos?: VoteListRelationFilter
  }, "id">

  export type PosteoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    anonymousId?: SortOrderInput | SortOrder
    usuarioId?: SortOrderInput | SortOrder
    comisionId?: SortOrder
    _count?: PosteoCountOrderByAggregateInput
    _avg?: PosteoAvgOrderByAggregateInput
    _max?: PosteoMaxOrderByAggregateInput
    _min?: PosteoMinOrderByAggregateInput
    _sum?: PosteoSumOrderByAggregateInput
  }

  export type PosteoScalarWhereWithAggregatesInput = {
    AND?: PosteoScalarWhereWithAggregatesInput | PosteoScalarWhereWithAggregatesInput[]
    OR?: PosteoScalarWhereWithAggregatesInput[]
    NOT?: PosteoScalarWhereWithAggregatesInput | PosteoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Posteo"> | number
    titulo?: StringWithAggregatesFilter<"Posteo"> | string
    contenido?: StringWithAggregatesFilter<"Posteo"> | string
    fecha?: DateTimeWithAggregatesFilter<"Posteo"> | Date | string
    anonymousId?: StringNullableWithAggregatesFilter<"Posteo"> | string | null
    usuarioId?: IntNullableWithAggregatesFilter<"Posteo"> | number | null
    comisionId?: IntWithAggregatesFilter<"Posteo"> | number
  }

  export type MateriaWhereInput = {
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    codigo?: IntFilter<"Materia"> | number
    name?: StringFilter<"Materia"> | string
    anio?: IntFilter<"Materia"> | number
    createdAt?: DateTimeFilter<"Materia"> | Date | string
    comision?: ComisionListRelationFilter
  }

  export type MateriaOrderByWithRelationInput = {
    codigo?: SortOrder
    name?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
    comision?: ComisionOrderByRelationAggregateInput
    _relevance?: MateriaOrderByRelevanceInput
  }

  export type MateriaWhereUniqueInput = Prisma.AtLeast<{
    codigo?: number
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    name?: StringFilter<"Materia"> | string
    anio?: IntFilter<"Materia"> | number
    createdAt?: DateTimeFilter<"Materia"> | Date | string
    comision?: ComisionListRelationFilter
  }, "codigo">

  export type MateriaOrderByWithAggregationInput = {
    codigo?: SortOrder
    name?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
    _count?: MateriaCountOrderByAggregateInput
    _avg?: MateriaAvgOrderByAggregateInput
    _max?: MateriaMaxOrderByAggregateInput
    _min?: MateriaMinOrderByAggregateInput
    _sum?: MateriaSumOrderByAggregateInput
  }

  export type MateriaScalarWhereWithAggregatesInput = {
    AND?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    OR?: MateriaScalarWhereWithAggregatesInput[]
    NOT?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    codigo?: IntWithAggregatesFilter<"Materia"> | number
    name?: StringWithAggregatesFilter<"Materia"> | string
    anio?: IntWithAggregatesFilter<"Materia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Materia"> | Date | string
  }

  export type ComisionWhereInput = {
    AND?: ComisionWhereInput | ComisionWhereInput[]
    OR?: ComisionWhereInput[]
    NOT?: ComisionWhereInput | ComisionWhereInput[]
    id?: IntFilter<"Comision"> | number
    profes?: StringFilter<"Comision"> | string
    codigo?: IntFilter<"Comision"> | number
    createdAt?: DateTimeFilter<"Comision"> | Date | string
    materiaId?: IntFilter<"Comision"> | number
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    posteos?: PosteoListRelationFilter
  }

  export type ComisionOrderByWithRelationInput = {
    id?: SortOrder
    profes?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    materiaId?: SortOrder
    materia?: MateriaOrderByWithRelationInput
    posteos?: PosteoOrderByRelationAggregateInput
    _relevance?: ComisionOrderByRelevanceInput
  }

  export type ComisionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComisionWhereInput | ComisionWhereInput[]
    OR?: ComisionWhereInput[]
    NOT?: ComisionWhereInput | ComisionWhereInput[]
    profes?: StringFilter<"Comision"> | string
    codigo?: IntFilter<"Comision"> | number
    createdAt?: DateTimeFilter<"Comision"> | Date | string
    materiaId?: IntFilter<"Comision"> | number
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    posteos?: PosteoListRelationFilter
  }, "id">

  export type ComisionOrderByWithAggregationInput = {
    id?: SortOrder
    profes?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    materiaId?: SortOrder
    _count?: ComisionCountOrderByAggregateInput
    _avg?: ComisionAvgOrderByAggregateInput
    _max?: ComisionMaxOrderByAggregateInput
    _min?: ComisionMinOrderByAggregateInput
    _sum?: ComisionSumOrderByAggregateInput
  }

  export type ComisionScalarWhereWithAggregatesInput = {
    AND?: ComisionScalarWhereWithAggregatesInput | ComisionScalarWhereWithAggregatesInput[]
    OR?: ComisionScalarWhereWithAggregatesInput[]
    NOT?: ComisionScalarWhereWithAggregatesInput | ComisionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comision"> | number
    profes?: StringWithAggregatesFilter<"Comision"> | string
    codigo?: IntWithAggregatesFilter<"Comision"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comision"> | Date | string
    materiaId?: IntWithAggregatesFilter<"Comision"> | number
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: IntFilter<"Vote"> | number
    value?: IntFilter<"Vote"> | number
    userId?: IntFilter<"Vote"> | number
    postId?: IntFilter<"Vote"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PosteoScalarRelationFilter, PosteoWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PosteoOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_postId?: VoteUserIdPostIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    value?: IntFilter<"Vote"> | number
    userId?: IntFilter<"Vote"> | number
    postId?: IntFilter<"Vote"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PosteoScalarRelationFilter, PosteoWhereInput>
  }, "id" | "userId_postId">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _avg?: VoteAvgOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
    _sum?: VoteSumOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vote"> | number
    value?: IntWithAggregatesFilter<"Vote"> | number
    userId?: IntWithAggregatesFilter<"Vote"> | number
    postId?: IntWithAggregatesFilter<"Vote"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    creadoEn?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    resetTokenCreatedAt?: Date | string | null
    posteos?: PosteoCreateNestedManyWithoutUsuarioInput
    votos?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    creadoEn?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    resetTokenCreatedAt?: Date | string | null
    posteos?: PosteoUncheckedCreateNestedManyWithoutUsuarioInput
    votos?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetTokenCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posteos?: PosteoUpdateManyWithoutUsuarioNestedInput
    votos?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetTokenCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posteos?: PosteoUncheckedUpdateManyWithoutUsuarioNestedInput
    votos?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    creadoEn?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    resetTokenCreatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetTokenCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetTokenCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PosteoCreateInput = {
    titulo: string
    contenido: string
    fecha?: Date | string
    anonymousId?: string | null
    usuario?: UserCreateNestedOneWithoutPosteosInput
    comision: ComisionCreateNestedOneWithoutPosteosInput
    votos?: VoteCreateNestedManyWithoutPostInput
  }

  export type PosteoUncheckedCreateInput = {
    id?: number
    titulo: string
    contenido: string
    fecha?: Date | string
    anonymousId?: string | null
    usuarioId?: number | null
    comisionId: number
    votos?: VoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PosteoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UserUpdateOneWithoutPosteosNestedInput
    comision?: ComisionUpdateOneRequiredWithoutPosteosNestedInput
    votos?: VoteUpdateManyWithoutPostNestedInput
  }

  export type PosteoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    comisionId?: IntFieldUpdateOperationsInput | number
    votos?: VoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PosteoCreateManyInput = {
    id?: number
    titulo: string
    contenido: string
    fecha?: Date | string
    anonymousId?: string | null
    usuarioId?: number | null
    comisionId: number
  }

  export type PosteoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PosteoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    comisionId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaCreateInput = {
    codigo: number
    name: string
    anio: number
    createdAt?: Date | string
    comision?: ComisionCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateInput = {
    codigo: number
    name: string
    anio: number
    createdAt?: Date | string
    comision?: ComisionUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comision?: ComisionUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comision?: ComisionUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaCreateManyInput = {
    codigo: number
    name: string
    anio: number
    createdAt?: Date | string
  }

  export type MateriaUpdateManyMutationInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriaUncheckedUpdateManyInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComisionCreateInput = {
    profes: string
    codigo: number
    createdAt?: Date | string
    materia: MateriaCreateNestedOneWithoutComisionInput
    posteos?: PosteoCreateNestedManyWithoutComisionInput
  }

  export type ComisionUncheckedCreateInput = {
    id?: number
    profes: string
    codigo: number
    createdAt?: Date | string
    materiaId: number
    posteos?: PosteoUncheckedCreateNestedManyWithoutComisionInput
  }

  export type ComisionUpdateInput = {
    profes?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materia?: MateriaUpdateOneRequiredWithoutComisionNestedInput
    posteos?: PosteoUpdateManyWithoutComisionNestedInput
  }

  export type ComisionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profes?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materiaId?: IntFieldUpdateOperationsInput | number
    posteos?: PosteoUncheckedUpdateManyWithoutComisionNestedInput
  }

  export type ComisionCreateManyInput = {
    id?: number
    profes: string
    codigo: number
    createdAt?: Date | string
    materiaId: number
  }

  export type ComisionUpdateManyMutationInput = {
    profes?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComisionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profes?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type VoteCreateInput = {
    value: number
    user: UserCreateNestedOneWithoutVotosInput
    post: PosteoCreateNestedOneWithoutVotosInput
  }

  export type VoteUncheckedCreateInput = {
    id?: number
    value: number
    userId: number
    postId: number
  }

  export type VoteUpdateInput = {
    value?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutVotosNestedInput
    post?: PosteoUpdateOneRequiredWithoutVotosNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type VoteCreateManyInput = {
    id?: number
    value: number
    userId: number
    postId: number
  }

  export type VoteUpdateManyMutationInput = {
    value?: IntFieldUpdateOperationsInput | number
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PosteoListRelationFilter = {
    every?: PosteoWhereInput
    some?: PosteoWhereInput
    none?: PosteoWhereInput
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PosteoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    creadoEn?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    resetTokenCreatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    creadoEn?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    resetTokenCreatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    creadoEn?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    resetTokenCreatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ComisionScalarRelationFilter = {
    is?: ComisionWhereInput
    isNot?: ComisionWhereInput
  }

  export type PosteoOrderByRelevanceInput = {
    fields: PosteoOrderByRelevanceFieldEnum | PosteoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PosteoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    anonymousId?: SortOrder
    usuarioId?: SortOrder
    comisionId?: SortOrder
  }

  export type PosteoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    comisionId?: SortOrder
  }

  export type PosteoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    anonymousId?: SortOrder
    usuarioId?: SortOrder
    comisionId?: SortOrder
  }

  export type PosteoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    anonymousId?: SortOrder
    usuarioId?: SortOrder
    comisionId?: SortOrder
  }

  export type PosteoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    comisionId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ComisionListRelationFilter = {
    every?: ComisionWhereInput
    some?: ComisionWhereInput
    none?: ComisionWhereInput
  }

  export type ComisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriaOrderByRelevanceInput = {
    fields: MateriaOrderByRelevanceFieldEnum | MateriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MateriaCountOrderByAggregateInput = {
    codigo?: SortOrder
    name?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type MateriaAvgOrderByAggregateInput = {
    codigo?: SortOrder
    anio?: SortOrder
  }

  export type MateriaMaxOrderByAggregateInput = {
    codigo?: SortOrder
    name?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type MateriaMinOrderByAggregateInput = {
    codigo?: SortOrder
    name?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type MateriaSumOrderByAggregateInput = {
    codigo?: SortOrder
    anio?: SortOrder
  }

  export type MateriaScalarRelationFilter = {
    is?: MateriaWhereInput
    isNot?: MateriaWhereInput
  }

  export type ComisionOrderByRelevanceInput = {
    fields: ComisionOrderByRelevanceFieldEnum | ComisionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComisionCountOrderByAggregateInput = {
    id?: SortOrder
    profes?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    materiaId?: SortOrder
  }

  export type ComisionAvgOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    materiaId?: SortOrder
  }

  export type ComisionMaxOrderByAggregateInput = {
    id?: SortOrder
    profes?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    materiaId?: SortOrder
  }

  export type ComisionMinOrderByAggregateInput = {
    id?: SortOrder
    profes?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    materiaId?: SortOrder
  }

  export type ComisionSumOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    materiaId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PosteoScalarRelationFilter = {
    is?: PosteoWhereInput
    isNot?: PosteoWhereInput
  }

  export type VoteUserIdPostIdCompoundUniqueInput = {
    userId: number
    postId: number
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type VoteAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type VoteSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PosteoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PosteoCreateWithoutUsuarioInput, PosteoUncheckedCreateWithoutUsuarioInput> | PosteoCreateWithoutUsuarioInput[] | PosteoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PosteoCreateOrConnectWithoutUsuarioInput | PosteoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PosteoCreateManyUsuarioInputEnvelope
    connect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type PosteoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PosteoCreateWithoutUsuarioInput, PosteoUncheckedCreateWithoutUsuarioInput> | PosteoCreateWithoutUsuarioInput[] | PosteoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PosteoCreateOrConnectWithoutUsuarioInput | PosteoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PosteoCreateManyUsuarioInputEnvelope
    connect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PosteoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PosteoCreateWithoutUsuarioInput, PosteoUncheckedCreateWithoutUsuarioInput> | PosteoCreateWithoutUsuarioInput[] | PosteoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PosteoCreateOrConnectWithoutUsuarioInput | PosteoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PosteoUpsertWithWhereUniqueWithoutUsuarioInput | PosteoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PosteoCreateManyUsuarioInputEnvelope
    set?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    disconnect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    delete?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    connect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    update?: PosteoUpdateWithWhereUniqueWithoutUsuarioInput | PosteoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PosteoUpdateManyWithWhereWithoutUsuarioInput | PosteoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PosteoScalarWhereInput | PosteoScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PosteoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PosteoCreateWithoutUsuarioInput, PosteoUncheckedCreateWithoutUsuarioInput> | PosteoCreateWithoutUsuarioInput[] | PosteoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PosteoCreateOrConnectWithoutUsuarioInput | PosteoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PosteoUpsertWithWhereUniqueWithoutUsuarioInput | PosteoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PosteoCreateManyUsuarioInputEnvelope
    set?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    disconnect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    delete?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    connect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    update?: PosteoUpdateWithWhereUniqueWithoutUsuarioInput | PosteoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PosteoUpdateManyWithWhereWithoutUsuarioInput | PosteoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PosteoScalarWhereInput | PosteoScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPosteosInput = {
    create?: XOR<UserCreateWithoutPosteosInput, UserUncheckedCreateWithoutPosteosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPosteosInput
    connect?: UserWhereUniqueInput
  }

  export type ComisionCreateNestedOneWithoutPosteosInput = {
    create?: XOR<ComisionCreateWithoutPosteosInput, ComisionUncheckedCreateWithoutPosteosInput>
    connectOrCreate?: ComisionCreateOrConnectWithoutPosteosInput
    connect?: ComisionWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutPostInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutPosteosNestedInput = {
    create?: XOR<UserCreateWithoutPosteosInput, UserUncheckedCreateWithoutPosteosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPosteosInput
    upsert?: UserUpsertWithoutPosteosInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPosteosInput, UserUpdateWithoutPosteosInput>, UserUncheckedUpdateWithoutPosteosInput>
  }

  export type ComisionUpdateOneRequiredWithoutPosteosNestedInput = {
    create?: XOR<ComisionCreateWithoutPosteosInput, ComisionUncheckedCreateWithoutPosteosInput>
    connectOrCreate?: ComisionCreateOrConnectWithoutPosteosInput
    upsert?: ComisionUpsertWithoutPosteosInput
    connect?: ComisionWhereUniqueInput
    update?: XOR<XOR<ComisionUpdateToOneWithWhereWithoutPosteosInput, ComisionUpdateWithoutPosteosInput>, ComisionUncheckedUpdateWithoutPosteosInput>
  }

  export type VoteUpdateManyWithoutPostNestedInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutPostInput | VoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutPostInput | VoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutPostInput | VoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VoteUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutPostInput | VoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutPostInput | VoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutPostInput | VoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ComisionCreateNestedManyWithoutMateriaInput = {
    create?: XOR<ComisionCreateWithoutMateriaInput, ComisionUncheckedCreateWithoutMateriaInput> | ComisionCreateWithoutMateriaInput[] | ComisionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ComisionCreateOrConnectWithoutMateriaInput | ComisionCreateOrConnectWithoutMateriaInput[]
    createMany?: ComisionCreateManyMateriaInputEnvelope
    connect?: ComisionWhereUniqueInput | ComisionWhereUniqueInput[]
  }

  export type ComisionUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<ComisionCreateWithoutMateriaInput, ComisionUncheckedCreateWithoutMateriaInput> | ComisionCreateWithoutMateriaInput[] | ComisionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ComisionCreateOrConnectWithoutMateriaInput | ComisionCreateOrConnectWithoutMateriaInput[]
    createMany?: ComisionCreateManyMateriaInputEnvelope
    connect?: ComisionWhereUniqueInput | ComisionWhereUniqueInput[]
  }

  export type ComisionUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<ComisionCreateWithoutMateriaInput, ComisionUncheckedCreateWithoutMateriaInput> | ComisionCreateWithoutMateriaInput[] | ComisionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ComisionCreateOrConnectWithoutMateriaInput | ComisionCreateOrConnectWithoutMateriaInput[]
    upsert?: ComisionUpsertWithWhereUniqueWithoutMateriaInput | ComisionUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: ComisionCreateManyMateriaInputEnvelope
    set?: ComisionWhereUniqueInput | ComisionWhereUniqueInput[]
    disconnect?: ComisionWhereUniqueInput | ComisionWhereUniqueInput[]
    delete?: ComisionWhereUniqueInput | ComisionWhereUniqueInput[]
    connect?: ComisionWhereUniqueInput | ComisionWhereUniqueInput[]
    update?: ComisionUpdateWithWhereUniqueWithoutMateriaInput | ComisionUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: ComisionUpdateManyWithWhereWithoutMateriaInput | ComisionUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: ComisionScalarWhereInput | ComisionScalarWhereInput[]
  }

  export type ComisionUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<ComisionCreateWithoutMateriaInput, ComisionUncheckedCreateWithoutMateriaInput> | ComisionCreateWithoutMateriaInput[] | ComisionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ComisionCreateOrConnectWithoutMateriaInput | ComisionCreateOrConnectWithoutMateriaInput[]
    upsert?: ComisionUpsertWithWhereUniqueWithoutMateriaInput | ComisionUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: ComisionCreateManyMateriaInputEnvelope
    set?: ComisionWhereUniqueInput | ComisionWhereUniqueInput[]
    disconnect?: ComisionWhereUniqueInput | ComisionWhereUniqueInput[]
    delete?: ComisionWhereUniqueInput | ComisionWhereUniqueInput[]
    connect?: ComisionWhereUniqueInput | ComisionWhereUniqueInput[]
    update?: ComisionUpdateWithWhereUniqueWithoutMateriaInput | ComisionUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: ComisionUpdateManyWithWhereWithoutMateriaInput | ComisionUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: ComisionScalarWhereInput | ComisionScalarWhereInput[]
  }

  export type MateriaCreateNestedOneWithoutComisionInput = {
    create?: XOR<MateriaCreateWithoutComisionInput, MateriaUncheckedCreateWithoutComisionInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutComisionInput
    connect?: MateriaWhereUniqueInput
  }

  export type PosteoCreateNestedManyWithoutComisionInput = {
    create?: XOR<PosteoCreateWithoutComisionInput, PosteoUncheckedCreateWithoutComisionInput> | PosteoCreateWithoutComisionInput[] | PosteoUncheckedCreateWithoutComisionInput[]
    connectOrCreate?: PosteoCreateOrConnectWithoutComisionInput | PosteoCreateOrConnectWithoutComisionInput[]
    createMany?: PosteoCreateManyComisionInputEnvelope
    connect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
  }

  export type PosteoUncheckedCreateNestedManyWithoutComisionInput = {
    create?: XOR<PosteoCreateWithoutComisionInput, PosteoUncheckedCreateWithoutComisionInput> | PosteoCreateWithoutComisionInput[] | PosteoUncheckedCreateWithoutComisionInput[]
    connectOrCreate?: PosteoCreateOrConnectWithoutComisionInput | PosteoCreateOrConnectWithoutComisionInput[]
    createMany?: PosteoCreateManyComisionInputEnvelope
    connect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
  }

  export type MateriaUpdateOneRequiredWithoutComisionNestedInput = {
    create?: XOR<MateriaCreateWithoutComisionInput, MateriaUncheckedCreateWithoutComisionInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutComisionInput
    upsert?: MateriaUpsertWithoutComisionInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutComisionInput, MateriaUpdateWithoutComisionInput>, MateriaUncheckedUpdateWithoutComisionInput>
  }

  export type PosteoUpdateManyWithoutComisionNestedInput = {
    create?: XOR<PosteoCreateWithoutComisionInput, PosteoUncheckedCreateWithoutComisionInput> | PosteoCreateWithoutComisionInput[] | PosteoUncheckedCreateWithoutComisionInput[]
    connectOrCreate?: PosteoCreateOrConnectWithoutComisionInput | PosteoCreateOrConnectWithoutComisionInput[]
    upsert?: PosteoUpsertWithWhereUniqueWithoutComisionInput | PosteoUpsertWithWhereUniqueWithoutComisionInput[]
    createMany?: PosteoCreateManyComisionInputEnvelope
    set?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    disconnect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    delete?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    connect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    update?: PosteoUpdateWithWhereUniqueWithoutComisionInput | PosteoUpdateWithWhereUniqueWithoutComisionInput[]
    updateMany?: PosteoUpdateManyWithWhereWithoutComisionInput | PosteoUpdateManyWithWhereWithoutComisionInput[]
    deleteMany?: PosteoScalarWhereInput | PosteoScalarWhereInput[]
  }

  export type PosteoUncheckedUpdateManyWithoutComisionNestedInput = {
    create?: XOR<PosteoCreateWithoutComisionInput, PosteoUncheckedCreateWithoutComisionInput> | PosteoCreateWithoutComisionInput[] | PosteoUncheckedCreateWithoutComisionInput[]
    connectOrCreate?: PosteoCreateOrConnectWithoutComisionInput | PosteoCreateOrConnectWithoutComisionInput[]
    upsert?: PosteoUpsertWithWhereUniqueWithoutComisionInput | PosteoUpsertWithWhereUniqueWithoutComisionInput[]
    createMany?: PosteoCreateManyComisionInputEnvelope
    set?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    disconnect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    delete?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    connect?: PosteoWhereUniqueInput | PosteoWhereUniqueInput[]
    update?: PosteoUpdateWithWhereUniqueWithoutComisionInput | PosteoUpdateWithWhereUniqueWithoutComisionInput[]
    updateMany?: PosteoUpdateManyWithWhereWithoutComisionInput | PosteoUpdateManyWithWhereWithoutComisionInput[]
    deleteMany?: PosteoScalarWhereInput | PosteoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVotosInput = {
    create?: XOR<UserCreateWithoutVotosInput, UserUncheckedCreateWithoutVotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotosInput
    connect?: UserWhereUniqueInput
  }

  export type PosteoCreateNestedOneWithoutVotosInput = {
    create?: XOR<PosteoCreateWithoutVotosInput, PosteoUncheckedCreateWithoutVotosInput>
    connectOrCreate?: PosteoCreateOrConnectWithoutVotosInput
    connect?: PosteoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVotosNestedInput = {
    create?: XOR<UserCreateWithoutVotosInput, UserUncheckedCreateWithoutVotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotosInput
    upsert?: UserUpsertWithoutVotosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotosInput, UserUpdateWithoutVotosInput>, UserUncheckedUpdateWithoutVotosInput>
  }

  export type PosteoUpdateOneRequiredWithoutVotosNestedInput = {
    create?: XOR<PosteoCreateWithoutVotosInput, PosteoUncheckedCreateWithoutVotosInput>
    connectOrCreate?: PosteoCreateOrConnectWithoutVotosInput
    upsert?: PosteoUpsertWithoutVotosInput
    connect?: PosteoWhereUniqueInput
    update?: XOR<XOR<PosteoUpdateToOneWithWhereWithoutVotosInput, PosteoUpdateWithoutVotosInput>, PosteoUncheckedUpdateWithoutVotosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PosteoCreateWithoutUsuarioInput = {
    titulo: string
    contenido: string
    fecha?: Date | string
    anonymousId?: string | null
    comision: ComisionCreateNestedOneWithoutPosteosInput
    votos?: VoteCreateNestedManyWithoutPostInput
  }

  export type PosteoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    titulo: string
    contenido: string
    fecha?: Date | string
    anonymousId?: string | null
    comisionId: number
    votos?: VoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PosteoCreateOrConnectWithoutUsuarioInput = {
    where: PosteoWhereUniqueInput
    create: XOR<PosteoCreateWithoutUsuarioInput, PosteoUncheckedCreateWithoutUsuarioInput>
  }

  export type PosteoCreateManyUsuarioInputEnvelope = {
    data: PosteoCreateManyUsuarioInput | PosteoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutUserInput = {
    value: number
    post: PosteoCreateNestedOneWithoutVotosInput
  }

  export type VoteUncheckedCreateWithoutUserInput = {
    id?: number
    value: number
    postId: number
  }

  export type VoteCreateOrConnectWithoutUserInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteCreateManyUserInputEnvelope = {
    data: VoteCreateManyUserInput | VoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PosteoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PosteoWhereUniqueInput
    update: XOR<PosteoUpdateWithoutUsuarioInput, PosteoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PosteoCreateWithoutUsuarioInput, PosteoUncheckedCreateWithoutUsuarioInput>
  }

  export type PosteoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PosteoWhereUniqueInput
    data: XOR<PosteoUpdateWithoutUsuarioInput, PosteoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PosteoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PosteoScalarWhereInput
    data: XOR<PosteoUpdateManyMutationInput, PosteoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PosteoScalarWhereInput = {
    AND?: PosteoScalarWhereInput | PosteoScalarWhereInput[]
    OR?: PosteoScalarWhereInput[]
    NOT?: PosteoScalarWhereInput | PosteoScalarWhereInput[]
    id?: IntFilter<"Posteo"> | number
    titulo?: StringFilter<"Posteo"> | string
    contenido?: StringFilter<"Posteo"> | string
    fecha?: DateTimeFilter<"Posteo"> | Date | string
    anonymousId?: StringNullableFilter<"Posteo"> | string | null
    usuarioId?: IntNullableFilter<"Posteo"> | number | null
    comisionId?: IntFilter<"Posteo"> | number
  }

  export type VoteUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
  }

  export type VoteUpdateManyWithWhereWithoutUserInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutUserInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: IntFilter<"Vote"> | number
    value?: IntFilter<"Vote"> | number
    userId?: IntFilter<"Vote"> | number
    postId?: IntFilter<"Vote"> | number
  }

  export type UserCreateWithoutPosteosInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    creadoEn?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    resetTokenCreatedAt?: Date | string | null
    votos?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPosteosInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    creadoEn?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    resetTokenCreatedAt?: Date | string | null
    votos?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPosteosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPosteosInput, UserUncheckedCreateWithoutPosteosInput>
  }

  export type ComisionCreateWithoutPosteosInput = {
    profes: string
    codigo: number
    createdAt?: Date | string
    materia: MateriaCreateNestedOneWithoutComisionInput
  }

  export type ComisionUncheckedCreateWithoutPosteosInput = {
    id?: number
    profes: string
    codigo: number
    createdAt?: Date | string
    materiaId: number
  }

  export type ComisionCreateOrConnectWithoutPosteosInput = {
    where: ComisionWhereUniqueInput
    create: XOR<ComisionCreateWithoutPosteosInput, ComisionUncheckedCreateWithoutPosteosInput>
  }

  export type VoteCreateWithoutPostInput = {
    value: number
    user: UserCreateNestedOneWithoutVotosInput
  }

  export type VoteUncheckedCreateWithoutPostInput = {
    id?: number
    value: number
    userId: number
  }

  export type VoteCreateOrConnectWithoutPostInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput>
  }

  export type VoteCreateManyPostInputEnvelope = {
    data: VoteCreateManyPostInput | VoteCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPosteosInput = {
    update: XOR<UserUpdateWithoutPosteosInput, UserUncheckedUpdateWithoutPosteosInput>
    create: XOR<UserCreateWithoutPosteosInput, UserUncheckedCreateWithoutPosteosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPosteosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPosteosInput, UserUncheckedUpdateWithoutPosteosInput>
  }

  export type UserUpdateWithoutPosteosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetTokenCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    votos?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPosteosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetTokenCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    votos?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ComisionUpsertWithoutPosteosInput = {
    update: XOR<ComisionUpdateWithoutPosteosInput, ComisionUncheckedUpdateWithoutPosteosInput>
    create: XOR<ComisionCreateWithoutPosteosInput, ComisionUncheckedCreateWithoutPosteosInput>
    where?: ComisionWhereInput
  }

  export type ComisionUpdateToOneWithWhereWithoutPosteosInput = {
    where?: ComisionWhereInput
    data: XOR<ComisionUpdateWithoutPosteosInput, ComisionUncheckedUpdateWithoutPosteosInput>
  }

  export type ComisionUpdateWithoutPosteosInput = {
    profes?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materia?: MateriaUpdateOneRequiredWithoutComisionNestedInput
  }

  export type ComisionUncheckedUpdateWithoutPosteosInput = {
    id?: IntFieldUpdateOperationsInput | number
    profes?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type VoteUpsertWithWhereUniqueWithoutPostInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutPostInput, VoteUncheckedUpdateWithoutPostInput>
    create: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutPostInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutPostInput, VoteUncheckedUpdateWithoutPostInput>
  }

  export type VoteUpdateManyWithWhereWithoutPostInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutPostInput>
  }

  export type ComisionCreateWithoutMateriaInput = {
    profes: string
    codigo: number
    createdAt?: Date | string
    posteos?: PosteoCreateNestedManyWithoutComisionInput
  }

  export type ComisionUncheckedCreateWithoutMateriaInput = {
    id?: number
    profes: string
    codigo: number
    createdAt?: Date | string
    posteos?: PosteoUncheckedCreateNestedManyWithoutComisionInput
  }

  export type ComisionCreateOrConnectWithoutMateriaInput = {
    where: ComisionWhereUniqueInput
    create: XOR<ComisionCreateWithoutMateriaInput, ComisionUncheckedCreateWithoutMateriaInput>
  }

  export type ComisionCreateManyMateriaInputEnvelope = {
    data: ComisionCreateManyMateriaInput | ComisionCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type ComisionUpsertWithWhereUniqueWithoutMateriaInput = {
    where: ComisionWhereUniqueInput
    update: XOR<ComisionUpdateWithoutMateriaInput, ComisionUncheckedUpdateWithoutMateriaInput>
    create: XOR<ComisionCreateWithoutMateriaInput, ComisionUncheckedCreateWithoutMateriaInput>
  }

  export type ComisionUpdateWithWhereUniqueWithoutMateriaInput = {
    where: ComisionWhereUniqueInput
    data: XOR<ComisionUpdateWithoutMateriaInput, ComisionUncheckedUpdateWithoutMateriaInput>
  }

  export type ComisionUpdateManyWithWhereWithoutMateriaInput = {
    where: ComisionScalarWhereInput
    data: XOR<ComisionUpdateManyMutationInput, ComisionUncheckedUpdateManyWithoutMateriaInput>
  }

  export type ComisionScalarWhereInput = {
    AND?: ComisionScalarWhereInput | ComisionScalarWhereInput[]
    OR?: ComisionScalarWhereInput[]
    NOT?: ComisionScalarWhereInput | ComisionScalarWhereInput[]
    id?: IntFilter<"Comision"> | number
    profes?: StringFilter<"Comision"> | string
    codigo?: IntFilter<"Comision"> | number
    createdAt?: DateTimeFilter<"Comision"> | Date | string
    materiaId?: IntFilter<"Comision"> | number
  }

  export type MateriaCreateWithoutComisionInput = {
    codigo: number
    name: string
    anio: number
    createdAt?: Date | string
  }

  export type MateriaUncheckedCreateWithoutComisionInput = {
    codigo: number
    name: string
    anio: number
    createdAt?: Date | string
  }

  export type MateriaCreateOrConnectWithoutComisionInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutComisionInput, MateriaUncheckedCreateWithoutComisionInput>
  }

  export type PosteoCreateWithoutComisionInput = {
    titulo: string
    contenido: string
    fecha?: Date | string
    anonymousId?: string | null
    usuario?: UserCreateNestedOneWithoutPosteosInput
    votos?: VoteCreateNestedManyWithoutPostInput
  }

  export type PosteoUncheckedCreateWithoutComisionInput = {
    id?: number
    titulo: string
    contenido: string
    fecha?: Date | string
    anonymousId?: string | null
    usuarioId?: number | null
    votos?: VoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PosteoCreateOrConnectWithoutComisionInput = {
    where: PosteoWhereUniqueInput
    create: XOR<PosteoCreateWithoutComisionInput, PosteoUncheckedCreateWithoutComisionInput>
  }

  export type PosteoCreateManyComisionInputEnvelope = {
    data: PosteoCreateManyComisionInput | PosteoCreateManyComisionInput[]
    skipDuplicates?: boolean
  }

  export type MateriaUpsertWithoutComisionInput = {
    update: XOR<MateriaUpdateWithoutComisionInput, MateriaUncheckedUpdateWithoutComisionInput>
    create: XOR<MateriaCreateWithoutComisionInput, MateriaUncheckedCreateWithoutComisionInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutComisionInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutComisionInput, MateriaUncheckedUpdateWithoutComisionInput>
  }

  export type MateriaUpdateWithoutComisionInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriaUncheckedUpdateWithoutComisionInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosteoUpsertWithWhereUniqueWithoutComisionInput = {
    where: PosteoWhereUniqueInput
    update: XOR<PosteoUpdateWithoutComisionInput, PosteoUncheckedUpdateWithoutComisionInput>
    create: XOR<PosteoCreateWithoutComisionInput, PosteoUncheckedCreateWithoutComisionInput>
  }

  export type PosteoUpdateWithWhereUniqueWithoutComisionInput = {
    where: PosteoWhereUniqueInput
    data: XOR<PosteoUpdateWithoutComisionInput, PosteoUncheckedUpdateWithoutComisionInput>
  }

  export type PosteoUpdateManyWithWhereWithoutComisionInput = {
    where: PosteoScalarWhereInput
    data: XOR<PosteoUpdateManyMutationInput, PosteoUncheckedUpdateManyWithoutComisionInput>
  }

  export type UserCreateWithoutVotosInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    creadoEn?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    resetTokenCreatedAt?: Date | string | null
    posteos?: PosteoCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutVotosInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    creadoEn?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    resetTokenCreatedAt?: Date | string | null
    posteos?: PosteoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutVotosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotosInput, UserUncheckedCreateWithoutVotosInput>
  }

  export type PosteoCreateWithoutVotosInput = {
    titulo: string
    contenido: string
    fecha?: Date | string
    anonymousId?: string | null
    usuario?: UserCreateNestedOneWithoutPosteosInput
    comision: ComisionCreateNestedOneWithoutPosteosInput
  }

  export type PosteoUncheckedCreateWithoutVotosInput = {
    id?: number
    titulo: string
    contenido: string
    fecha?: Date | string
    anonymousId?: string | null
    usuarioId?: number | null
    comisionId: number
  }

  export type PosteoCreateOrConnectWithoutVotosInput = {
    where: PosteoWhereUniqueInput
    create: XOR<PosteoCreateWithoutVotosInput, PosteoUncheckedCreateWithoutVotosInput>
  }

  export type UserUpsertWithoutVotosInput = {
    update: XOR<UserUpdateWithoutVotosInput, UserUncheckedUpdateWithoutVotosInput>
    create: XOR<UserCreateWithoutVotosInput, UserUncheckedCreateWithoutVotosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotosInput, UserUncheckedUpdateWithoutVotosInput>
  }

  export type UserUpdateWithoutVotosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetTokenCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posteos?: PosteoUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutVotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetTokenCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posteos?: PosteoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PosteoUpsertWithoutVotosInput = {
    update: XOR<PosteoUpdateWithoutVotosInput, PosteoUncheckedUpdateWithoutVotosInput>
    create: XOR<PosteoCreateWithoutVotosInput, PosteoUncheckedCreateWithoutVotosInput>
    where?: PosteoWhereInput
  }

  export type PosteoUpdateToOneWithWhereWithoutVotosInput = {
    where?: PosteoWhereInput
    data: XOR<PosteoUpdateWithoutVotosInput, PosteoUncheckedUpdateWithoutVotosInput>
  }

  export type PosteoUpdateWithoutVotosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UserUpdateOneWithoutPosteosNestedInput
    comision?: ComisionUpdateOneRequiredWithoutPosteosNestedInput
  }

  export type PosteoUncheckedUpdateWithoutVotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    comisionId?: IntFieldUpdateOperationsInput | number
  }

  export type PosteoCreateManyUsuarioInput = {
    id?: number
    titulo: string
    contenido: string
    fecha?: Date | string
    anonymousId?: string | null
    comisionId: number
  }

  export type VoteCreateManyUserInput = {
    id?: number
    value: number
    postId: number
  }

  export type PosteoUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
    comision?: ComisionUpdateOneRequiredWithoutPosteosNestedInput
    votos?: VoteUpdateManyWithoutPostNestedInput
  }

  export type PosteoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
    comisionId?: IntFieldUpdateOperationsInput | number
    votos?: VoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PosteoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
    comisionId?: IntFieldUpdateOperationsInput | number
  }

  export type VoteUpdateWithoutUserInput = {
    value?: IntFieldUpdateOperationsInput | number
    post?: PosteoUpdateOneRequiredWithoutVotosNestedInput
  }

  export type VoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type VoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type VoteCreateManyPostInput = {
    id?: number
    value: number
    userId: number
  }

  export type VoteUpdateWithoutPostInput = {
    value?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutVotosNestedInput
  }

  export type VoteUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VoteUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ComisionCreateManyMateriaInput = {
    id?: number
    profes: string
    codigo: number
    createdAt?: Date | string
  }

  export type ComisionUpdateWithoutMateriaInput = {
    profes?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posteos?: PosteoUpdateManyWithoutComisionNestedInput
  }

  export type ComisionUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    profes?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posteos?: PosteoUncheckedUpdateManyWithoutComisionNestedInput
  }

  export type ComisionUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    profes?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosteoCreateManyComisionInput = {
    id?: number
    titulo: string
    contenido: string
    fecha?: Date | string
    anonymousId?: string | null
    usuarioId?: number | null
  }

  export type PosteoUpdateWithoutComisionInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UserUpdateOneWithoutPosteosNestedInput
    votos?: VoteUpdateManyWithoutPostNestedInput
  }

  export type PosteoUncheckedUpdateWithoutComisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    votos?: VoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PosteoUncheckedUpdateManyWithoutComisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}