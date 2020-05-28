import styled from 'styled-components'

export const ProductWrapper = styled.div`
  .card{
    border-color: transparent;
    transition: all .3s linear;
  }

  .card-footer{
    border-top:transparent;
    background: transparent;
    transition:all .3s linear;
  }

  &:hover{
    .card{
      border: 0.02rem solid rgba(0,0,0,.1);
      box-shadow: 3px 3px 6px 0px rgba(0,0,0,.1)
    }

    .card-footer{
      background: rgba(247,247,247);
    }
  }

  .img-container{
    overflow: hidden;
    position: relative;
  }

  .card-img-top{
    transition:all .5s linear;
  }
  
  .img-container:hover .card-img-top{
    transform: scale(1.2 );
  }

  .card-btn{
    position:absolute;
    bottom: 0;
    right: -1px;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color:var(--mainWhite);
    font-size: 1rem;
    border-radius: .5rem 0 0 0;
    transform: translate(100%, 100%);
    transition:all .5s linear;
  }

  .img-container:hover .card-btn{
    transform: translate(0,0);
  }

  .cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
  }
`