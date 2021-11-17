import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_responsiveness_re_cuv5.svg').default,
    description: (
      <>
        With just drag and drop, you can easily create your own gallery with your own style.
      </>
    ),
  },
  {
    title: 'Increase Conversions',
    Svg: require('../../static/img/undraw_setup_analytics_re_foim.svg').default,
    description: (
      <>
        Works with different screen sizes, helping you promote your products better and not miss potential customers.
      </>
    ),
  },
  {
    title: 'Automatically Generate Layouts And Colors',
    Svg: require('../../static/img/undraw_geniuses_9h9g.svg').default,
    description: (
      <>
        With the color suggestion system, it will help you create an extremely artistic gallery in the shortest time.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
