/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (head === null || head.next === null){
            return;
        }

        let slow = head;
        let fast = head;

        while( fast.next !== null && fast.next.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null

        let prev: ListNode | null = null;

        while (second !== null){
            const next = second.next;

            second.next = prev;
            prev = second;
            second = next;
        }

        let first:ListNode | null = head;
        second = prev;

        while(second!== null){
            const nextFirst = first.next;
            const nextSecond = second.next;

            first.next = second
            second.next = nextFirst

            first = nextFirst;
            second = nextSecond;
        }
    }
}
