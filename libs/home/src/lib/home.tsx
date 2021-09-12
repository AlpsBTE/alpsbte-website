/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './home.scss';
import { Button } from '@alpsbte/shared/components';
import HomeContentSection from '../components/home-content-section/home-content-section';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { tr } from '@alpsbte/shared/language';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = inject(languageStore.storeKey)(
  observer(({}: HomeProps) => {
    const [offsetY, setOffsetY] = useState(0);
    const scrollEvent = () => {
      setOffsetY(window.pageYOffset);
    };

    const componentDidMount = () => {
      window.addEventListener('scroll', scrollEvent);
    };
    const componentWillUnmount = () => {
      window.removeEventListener('scroll', scrollEvent);
    };

    useEffect(() => {
      componentDidMount();
      return componentWillUnmount;
    });

    return (
      <>
        <div
          className="heading"
          style={{ backgroundPositionY: `${offsetY * 0.5}px` }}
        >
          <div className="block">
            <div className="head_line_box">
              <h1 className="head_line">{tr('pages.home.headline')}</h1>
              <div className="buttons">
                <Button
                  label={tr('pages.home.joinUs')}
                  size="lg"
                  color="#fff"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '5vh',
                  }}
                />
                <Button
                  label="IP: mc.alps-bte.com"
                  size="lg"
                  color="#fff"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '3vh',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <HomeContentSection
            title="Our Mission"
            image="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
            isImageAlignedLeft={true}
          >
            Lorem Impsum dolor sit amet ding dong das theos doean ejal ndian
            doedn djse desjd neoand doe Lorem Impsum dolor sit amet ding dong
            das theos doean ejal ndian doedn djse desjd neoand doe Lorem Impsum
            dolor sit amet ding dong das theos doean ejal ndian doedn djse desjd
            neoand doe Lorem Impsum dolor sit amet ding dong das theos doean
            ejal ndian doedn djse desjd neoand doe
          </HomeContentSection>
          <HomeContentSection
            title="Title"
            image="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
            isImageAlignedLeft={false}
          >
            Lorem Impsum dolor sit amet ding dong das theos doean ejal ndian
            doedn djse desjd neoand doe Lorem Impsum dolor sit amet ding dong
            das theos doean ejal ndian doedn djse desjd neoand doe Lorem Impsum
            dolor sit amet ding dong das theos doean ejal ndian doedn djse desjd
            neoand doe Lorem Impsum dolor sit amet ding dong das theos doean
            ejal ndian doedn djse desjd neoand doe
          </HomeContentSection>
          <HomeContentSection
            title="Title"
            image="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
            isImageAlignedLeft={true}
          >
            Lorem Impsum dolor sit amet ding dong das theos doean ejal ndian
            doedn djse desjd neoand doe Lorem Impsum dolor sit amet ding dong
            das theos doean ejal ndian doedn djse desjd neoand doe Lorem Impsum
            dolor sit amet ding dong das theos doean ejal ndian doedn djse desjd
            neoand doe Lorem Impsum dolor sit amet ding dong das theos doean
            ejal ndian doedn djse desjd neoand doe
          </HomeContentSection>
        </div>
      </>
    );
  })
);

export default Home;
