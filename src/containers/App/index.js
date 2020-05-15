// This is shared across all pages

import React, { useEffect } from "react";
import { Switch, Route, useHistory, Redirect, useLocation } from "react-router-dom";
import SideBar from "~/containers/SideBar/Loadable";
import ContentBar from "~/containers/ContentBar/Loadable";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import styles from "./styles.module";

import howToBet from "~/utils/data/how-to-bet/index";
import betting101 from "~/utils/data/how-to-bet/betting101";
import sportsBettingBasics from "~/utils/data/how-to-bet/sportsBettingBasics";
import advancedBettingConcepts from "~/utils/data/how-to-bet/advancedBettingConcept";
import sportsBettingMarket from "~/utils/data/how-to-bet/sportsBettingMarket";

export default function App() {
    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <Header />
                <div className={styles.bodyContent}>
                    <SideBar />
                    <Switch>
                        <Route
                            exact
                            path="/how-to-bet/betting/basics"
                            hash=""
                            component={() => <ContentBar markDownText={sportsBettingBasics} />}
                        />
                        <Route
                            exact
                            path="/how-to-bet/advanced/sports-betting-market"
                            component={() => <ContentBar markDownText={sportsBettingMarket} />}
                        />
                        <Route exact path="/how-to-bet/betting" component={() => <ContentBar markDownText={betting101} />} />
                        <Route
                            exact
                            path="/how-to-bet/advanced"
                            component={() => <ContentBar markDownText={advancedBettingConcepts} nextTitle={"betting odds"} />}
                        />
                        <Route exact path="/how-to-bet" component={() => <ContentBar markDownText={howToBet} />} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </div>
    );
}
