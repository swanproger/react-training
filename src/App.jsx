import { useState } from "react";
import IntroSection from "./IntroSection";
import TabsSection from "./tabsSection";
import FeedbackSection from "./FeedbackSection";
import TeachingSection from "./TeachingSection";
import DifferencesSection from "./DifferencesSection";
import Header from "./header";
import EffectSection from "./EffectSection";
function Menu() {
    const [tab, setTab] = useState("effect");
    return (
        <>
            <Header />
            <main>
                <IntroSection />
                <TabsSection active={tab} onChange={(current) => setTab(current)} />

                {tab === "main" && (
                    <>
                        <TeachingSection></TeachingSection>
                        <DifferencesSection></DifferencesSection>
                    </>
                )}
                {tab === "feedback" && <FeedbackSection></FeedbackSection>}
                {tab === "effect" && <EffectSection />}
            </main>
        </>
    );
}
export default Menu;
