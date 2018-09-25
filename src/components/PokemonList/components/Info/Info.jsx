import React from 'react';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import Type from '../../../shared/Type/Type';
import styles from './Info.sass';

const Info = ({
  height,
  weight,
  candy,
  candy_count: candyCount,
  egg,
  spawn_chance: spawnChance,
  avg_spawns: avgSpawns,
  spawn_time: spawnTime,
  multipliers,
  weaknesses,
  next_evolution: nextEvolution,
}) => (
  <section className={bs['list-group']}>
    <div className={bs['list-group-item']}>
      <p>
        Height
        {' '}
        <span className={`${bs.badge} ${bs['badge-info']}`}>{height}</span>
      </p>
      <p>
        Weight
        {' '}
        <span className={`${bs.badge} ${bs['badge-info']}`}>{weight}</span>
      </p>
    </div>
    <div className={bs['list-group-item']}>
      <p>
        Food
        {' '}
        <span className={`${bs.badge} ${bs['badge-primary']}`}>{candy}</span>
        <span className={`${bs.badge} ${bs['badge-info']}`}>{candyCount}</span>
      </p>
    </div>
    <div className={bs['list-group-item']}>
      <p>
        Eggs
        {' '}
        <span className={`${bs.badge} ${bs['badge-info']}`}>{egg}</span>
      </p>
    </div>
    <div className={`${bs['list-group-item']} ${styles.spawn}`}>
      <h6 className={bs['input-group-text']}>Spawn</h6>
      <div className={bs['input-group']}>
        <div className={bs['input-group-prepend']}>
          <span className={bs['input-group-text']}>Chance</span>
        </div>
        <span className={bs['form-control']}>{spawnChance}</span>
      </div>
      <div className={bs['input-group']}>
        <div className={bs['input-group-prepend']}>
          <span className={bs['input-group-text']}>Average</span>
        </div>
        <span className={bs['form-control']}>{avgSpawns}</span>
      </div>
      <div className={bs['input-group']}>
        <div className={bs['input-group-prepend']}>
          <span className={bs['input-group-text']}>Time</span>
        </div>
        <span className={bs['form-control']}>{spawnTime}</span>
      </div>
    </div>
    <div className={bs['list-group-item']}>
      <p>
        Multipliers
        {multipliers && multipliers.map(multiplier => (
          <span className={bs.badge}>{multiplier}</span>
        ))}
      </p>
    </div>
    <div className={bs['list-group-item']}>
      <p>
        Weakness
        {' '}
        {weaknesses.map(weakness => <Type type={weakness} />)}
      </p>
    </div>
    <div className={bs['list-group-item']}>
      <h6>Evolution</h6>
      {nextEvolution.map(evolution => (
        <span className={bs.badge}>
          #
          {evolution.num}
          {' '}
          {evolution.name}
        </span>
      ))}
    </div>
  </section>
);

Info.defaultProps = {
  height: 'No data',
  weight: 'No data',
  candy: 'No data',
  candy_count: 0,
  egg: 'No data',
  spawn_chance: 0,
  avg_spawns: 0,
  spawn_time: 'No data',
  multipliers: [],
  weaknesses: [],
  next_evolution: [{ name: 'Not evolving' }],
};

Info.propTypes = {
  height: PropTypes.string,
  weight: PropTypes.string,
  candy: PropTypes.string,
  candy_count: PropTypes.number,
  egg: PropTypes.string,
  spawn_chance: PropTypes.number,
  avg_spawns: PropTypes.number,
  spawn_time: PropTypes.string,
  multipliers: PropTypes.arrayOf(PropTypes.number),
  weaknesses: PropTypes.arrayOf(PropTypes.object),
  next_evolution: PropTypes.arrayOf(PropTypes.object),
};

export default Info;
