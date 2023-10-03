import type { Post, PostState } from '../types'

export default {
  getPostsList(state: PostState): Array<Post> {
    return state.postsList
  }
}
