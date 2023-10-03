export type Post = {
  title: string
  subtitle: string
  author: string
  date: string
  content: string
}

export type PostState = {
  postsList: Array<Post>,
  isEditing: boolean
}

export interface Actions {
  updatePostsList: (post: Post) => void;
  editPost: () => void;
}

export interface Getters{
  getPostsList: (state: PostState) =>  Array<Post>;
}
