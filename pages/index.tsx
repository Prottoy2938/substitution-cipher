import React, { useState } from "react";
import HandleInput from "../src/components/handle-input/handle-input";
import HandleOutput from "../src/components/handle-output/handle-output";
import Head from "next/head";
import { Row, Col } from "react-grid-system";
import { Box, Heading, Select } from "@chakra-ui/core";
import Drawer from "../src/components/drawer/drawer";

const Home: React.FC = () => {
  const [userContent, setUserContent] = useState("");
  const [encKey, setEncKey] = useState({ key: "", enabled: false });
  const [skip, setSkip] = useState(1);
  return (
    <>
      <Head>
        <title>Cipher Delta</title>
        <link rel="shortcut icon" href="/favicon.svg" />

        <meta property="og:title" content="Cipher Delta" />
        <meta
          name="description"
          content="A web application that helps encode and decode plain content"
        />
        <meta
          property="og:description"
          content="A web application that helps encode and decode plain content"
        />

        <meta
          property="og:image"
          content="https://cipher-delta.edrini.xyz/logo-img-1200.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Select w="150px" pos="absolute" ml={[1, 1, 2, 3]} mb={0}>
        <option value="Encode">Encode</option>
        <option value="Decode">Decode</option>
      </Select>
      <Drawer />

      <Box textAlign="center" margin="0 auto">
        <Heading mt={2} mb={16}>
          Cipher Delta
        </Heading>
        <Row style={{ margin: 0 }}>
          <Col xs={12} sm={12} md={12} lg={7} xl={7}>
            <HandleInput
              setUserContent={setUserContent}
              skip={skip}
              setSkip={setSkip}
              userContent={userContent}
              setEncKey={setEncKey}
              encKey={encKey}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={5} xl={5}>
            <HandleOutput
              encKey={encKey}
              userContent={userContent}
              skip={skip}
            />
          </Col>
        </Row>
      </Box>
    </>
  );
};

export default Home;
