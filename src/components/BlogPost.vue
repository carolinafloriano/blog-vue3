<script setup lang="ts">
import { useStore } from '../store'

const store = useStore()

function editPost(): void {
  store.editPost()
}
</script>

<template>
  <div class="post">
    <div class="header">
      <div class="informations">
        <div class="avatar"></div>
        <div class="data">
          <span class="title"><slot name="title"></slot></span>
          <span class="subtitle"><slot name="subtitle"></slot></span>
        </div>
      </div>
      <div class="others">
        <div class="icons">
          <button class="deleteButton">
            <i class="fa-solid fa-trash-can"></i>
          </button>
          <button class="editButton" @click="editPost()">
            <i class="fa-solid fa-pen"></i>
          </button>
        </div>
        <div class="author">
          <span class="tag">by </span>
          <slot name="author"></slot>
        </div>
      </div>
    </div>
    <hr />
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <span class="date"><slot name="date"></slot></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css';
.post {
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: map-get($colors, 'dark');
  box-sizing: border-box;
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  > .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    padding: 15px 15px 0px 15px;

    > .informations {
      display: flex;
      flex-direction: row;
      gap: 12px;
      align-items: center;

      > .avatar {
        width: 40px;
        height: 40px;
        background-color: map-get($colors, 'primary');
        border-radius: 10px;
      }

      > .data {
        display: flex;
        flex-direction: column;
        gap: 2px;

        > .title {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          color: map-get($colors, 'primary');
        }

        > .subtitle {
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 13px;
        }
      }
    }

    > .others {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 15px;

      > .icons {
        display: flex;
        flex-direction: row;
        gap: 15px;
        font-size: 1rem;

        > .deleteButton {
          color: white;
          border: 0;
          background-color: map-get($colors, 'danger');
          padding: 6px 7px;
          border-radius: 5px;
          cursor: pointer;
        }

        > .editButton {
          color: white;
          border: 0;
          background-color: map-get($colors, 'secondary');
          padding: 6px 7px;
          border-radius: 5px;
          cursor: pointer;
        }
      }

      > .author {
        font-size: 12px;
        font-weight: 700;
        > .tag {
          font-weight: 400;
        }
      }
    }
  }

  > .content {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-indent: 1.5em;
    color: map-get($colors, 'dark');
    text-align: justify;
    padding: 0px 15px;
  }

  > .footer {
    width: 70px;
    height: 18px;

    background-color: map-get($colors, 'dark');
    border-radius: 10px 0px;
    align-self: end;
    color: #ffffff;
    padding: 5px 5px;

    text-align: center;

    > .date {
      font-family: 'Josefin Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 10px;
    }
  }
}
</style>
