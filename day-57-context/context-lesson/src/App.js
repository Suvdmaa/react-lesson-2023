import "./App.css";
// import Layout from "./components/Layout";
// import { UserProvider } from "./contexts/UserContext";
import Section from "./components/Section";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <h1>Day - 57 - React Contenxt</h1>
      {/* <UserProvider>
        <Layout />
      </UserProvider> */}
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Section level={4}>
              <Heading>Sub-sub-Heading</Heading>
              <Heading>Sub-sub-Heading</Heading>
              <Heading>Sub-sub-Heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;
