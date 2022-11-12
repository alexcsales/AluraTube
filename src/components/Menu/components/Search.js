import React from "react";
import styled from "styled-components"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    border-radius: 40px 0 0 40px;
    font-size: 1rem;
    padding-left:1rem;

    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border: 0.5px solid ${({ theme }) => theme.borderBase};
    border-left: none;
    border-radius: 0 40px 40px 0;    
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    cursor: pointer;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
  
  const valorDaBusca = valorDoFiltro;
  const setValorDaBusca = setValorDoFiltro;

  return (
    <StyledSearch>
      <input type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} placeholder="Pesquisar"/>
      <button>
      <svg aria-hidden="true" class="s-input-icon s-input-icon__search svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg>
      </button>
    </StyledSearch>
  )
}