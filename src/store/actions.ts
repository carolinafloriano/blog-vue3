import type { Post, PostState } from '../types'

export default {
  updatePostsList(this: PostState, post: Post): void {
    this.postsList.push(post)
  },

  editPost(this: PostState): void {
    this.isEditing = true
  }
}
