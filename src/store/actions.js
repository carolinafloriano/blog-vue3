export default {
  /**
   * Atualiza a pokedex com os pokemons
   */
  updatePostsList(post) {
    this.postsList.push(post)
  },

  editPost() {
    this.isEditing = true
  }
}
