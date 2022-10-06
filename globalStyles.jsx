import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
		user-select: none;
}

html {       
font-size: 62.5%; 
}

body {       
font-size: 1.6rem;
background: linear-gradient(116.82deg, rgba(247, 183, 24, 0.7) 0%, rgba(245, 197, 78, 0.6) 100%);
}

body, html, #root{
	height: 100%;
	padding: 0;
	margin: 0;
}

#root{
	display: flex;
	justify-content: center;
	align-items: center;
  padding: 1.5rem;
	    @media (max-width: 400px) {
        padding: 0;
    }
}
`;
