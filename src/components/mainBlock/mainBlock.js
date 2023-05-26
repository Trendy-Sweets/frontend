function MainBlock({slogan}) {
    return (
        <div className="main__block">
        <div className="main__block-titles">
          <h1 className="main__title-block">TRENDY SWEETS</h1>
          <h2 className="main__subtitle-block">{slogan ? slogan: "ПОДАРУЙ НАСАЛОДУ1"}</h2>
      </div> 
      </div>
    );
  }
  
  export default MainBlock;
  