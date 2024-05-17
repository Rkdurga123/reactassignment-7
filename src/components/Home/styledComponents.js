import styled from 'styled-components'

export const HomeContainer = styled.div`
 background-color:${props => props.bgColor};
 min-height:100vh;
 margin-top:60px;
 margin-bottom:60px;
 overflow-y: auto;
 @media screen and (min-width:768px){
    margin-left: 250px;
    margin-bottom:0px;
 }
`
export const BannerContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png);
  width:100%;
  background-size:cover;
  display:${props => props.display};
  justify-content: space-between;
  padding:20px;
`
export const BannerLeftPart = styled.div`
  widtg:50%;
`
export const BannerRightPart = styled.div`
 display:flex;
 justify-content:flex-end;
`
export const BannerImage = styled.img`
  height:30px;
  width:80px;
`
export const BannerButton = styled.button`
  padding-left:10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #000000;
  color: #000000;
  background: none;
`

export const BannerText = styled.p`
  font-family: "Roboto";
  font-size: 15px;
  color: #000000;
  @media screen and (min-width:576px){
    font-size:20px;
  }
`
export const SearchContainer = styled.div`
  display:flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  height: 40px;
  width: 60%;
  @media screen and (min-width:576px){
    width: 40%;
  }
`

export const SearchIconContainer = styled.div`
  display:flex;
 justify-content:center;
`
export const SearchInput = styled.input`
   bacjground: none;
   width: 100%;
   outline:none;
   border: none;
   padding: 5px;
   color: ${props => props.color};
   font-family: "Roboto";
`
export const LoaderContainer = styled.div`
   display:flex;
   justify-content: center;
   align:items: center;
   min-height: 80vh;
`
export const BannerCloseButton = styled.div`
  padding-left:10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #000000;
  color: #000000;
  background: none;
`
