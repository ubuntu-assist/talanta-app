import { useRef } from 'react'

interface Node<T> {
  key: number
  value: T
  next: Node<T> | null
}

class LRUCache<T> {
  capacity: number
  cache: { [key: string]: Node<T> }
  head: Node<T> | null
  tail: Node<T> | null

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = {}
    this.head = null
    this.tail = null
  }

  get(key: number): T | null {
    if (this.cache[key]) {
      this.moveToFront(key)
      return this.cache[key].value
    }

    return null
  }

  put(key: number, value: T): void {
    if (this.cache[key]) {
      this.cache[key].value = value
      this.moveToFront(key)
    } else {
      if (Object.keys(this.cache).length === this.capacity) {
        this.removeLast()
      }

      this.addToFront(key, value)
    }
  }

  addToFront(key: number, value: T): void {
    const newNode: Node<T> = { key, value, next: null }

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.cache[key] = newNode
  }

  moveToFront(key: number): void {
    const current = this.cache[key]

    if (current === this.head) return

    let prev: Node<T> | null = null
    let node: Node<T> | null = this.head

    while (node && node.key !== key) {
      prev = node
      node = node.next
    }

    if (!node) return

    if (node === this.tail) {
      this.tail = prev
    }

    if (prev) {
      prev.next = node.next
    }

    node.next = this.head
    this.head = node
  }

  removeLast(): void {
    if (!this.head) return

    const lastKey = this.tail?.key
    if (lastKey) {
      delete this.cache[lastKey]
    }

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      let current = this.head
      while (current && current.next !== this.tail) {
        current = current.next!
      }

      if (current) {
        current.next = null
        this.tail = current
      }
    }
  }
}

// Use generics in the `useLRUCache` function
const useLRUCache = <T>(capacity: number) => {
  const cacheRef = useRef<LRUCache<T>>(new LRUCache<T>(capacity))

  return {
    get: (key: number): T | null => cacheRef.current.get(key),
    put: (key: number, value: T) => cacheRef.current.put(key, value),
  }
}

export default useLRUCache
