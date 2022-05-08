import React, {useContext, useEffect} from "react";
import Button from "../components/elements/button/Button";
import {useNavigate} from "react-router-dom";
import Page from "../components/page/Page";
import MarketContext from "../contexts/MarketContext";

const HomePage: React.FC = () => {
  const {setData: setMarketContextData} = useContext(MarketContext)
  const navigation = useNavigate();
  useEffect(() => {
    setMarketContextData(prevState => {
      return {};
    })
  }, [])
  return (
    <div>
      <Page>
        <div className="text-3xl text-center p-10">
          <Button color='dark' variant='outline' size='large' onClick={() => {
            navigation('/po9qzk/')
          }}>
            سوپرمارکت روژان جردن
          </Button>
        </div>
      </Page>
    </div>
  );
}

export default HomePage;
