import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  margin: 10px 0;

  .card-item {
    &-img {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      object-fit: cover;
      width: 100%;
      max-height: 200px;
    }

    &-title {
      padding: 5px;
      font-size: 16px;
    }

    &-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 10px 10px 10px;

      &-user {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;

        &-avatar {
          width: 20px;
          height: 20px;
          background-size: cover;
          border-radius: 50%;
        }

        &-name {
          margin-left: 5px;
          font-size: 14px;
          color: #595959;
        }
      }

      &-like {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        font-size: 16px;
        color: #595959;

        &-num {
          margin-left: 2px;
          font-size: 14px;
        }
      }
    }
  }
`;
