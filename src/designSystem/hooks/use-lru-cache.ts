/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'

interface Node {
  key: number
  value: any
  next: Node | null
}

class LRUCache {
  capacity: number
  cache: { [key: string]: Node }
  head: Node | null
  tail: Node | null

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = {}
    this.head = null
    this.tail = null
  }

  get(key: number): any {
    if (this.cache[key]) {
      this.moveToFront(key)
      return this.cache[key].value
    }

    return null
  }

  put(key: number, value: any): void {
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

  addToFront(key: number, value: any): void {
    const newNode: Node = { key, value, next: null }

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

    let prev: Node | null = null
    let node: Node | null = this.head

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

const useLRUCache = (capacity: number) => {
  const cacheRef = useRef<LRUCache>(new LRUCache(capacity))

  return {
    get: (key: number) => cacheRef.current.get(key),
    put: (key: number, value: any) => cacheRef.current.put(key, value),
  }
}

export default useLRUCache
