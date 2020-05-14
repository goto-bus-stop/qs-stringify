type StringifiableArray = Array<StringifiableObject>
type StringifiableValue = StringifiableObject | StringifiableArray | number | string | null
type StringifiableObject = { [name: string]: StringifiableValue | undefined }

/**
 * Stringify an object for use in a query string.
 *
 * @param {Object} obj - The object.
 * @param {string} prefix - When nesting, the parent key.
 *     keys in `obj` will be stringified as `prefix[key]`.
 */
declare function queryStringify (obj: StringifiableObject, prefix?: string): string

export = queryStringify
