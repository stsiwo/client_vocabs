import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';

const newIcon = require('./assets/new.svg');
const editIcon = require('./assets/edit.svg');
const sortIcon = require('./assets/sort.svg');
const deleteIcon = require('./assets/delete.svg');
const selectAllIcon = require('./assets/selectAll.svg');
const uploadIcon = require('./assets/upload.svg');
const uploadImageIcon = require('./assets/uploadImage.svg');
const searchImageIcon = require('./assets/searchImage.svg');
const calOldIcon = require('./assets/calOld.svg');
const calNewIcon = require('./assets/calNew.svg');
const alphaAscIcon = require('./assets/alphaAsc.svg');
const searchIcon = require('./assets/search.svg');
const alphaDescIcon = require('./assets/alphaDesc.svg');
const wordIcon = require('./assets/word.svg');


storiesOf('Icon', module)
  .add('new', () => <Icon svgSrc={newIcon}></Icon>)
  .add('edit', () => <Icon svgSrc={editIcon}></Icon>)
  .add('sort', () => <Icon svgSrc={sortIcon}></Icon>)
  .add('delete', () => <Icon svgSrc={deleteIcon}></Icon>)
  .add('selectAll', () => <Icon svgSrc={selectAllIcon}></Icon>)
  .add('upload', () => <Icon svgSrc={uploadIcon}></Icon>)
  .add('uploadImage', () => <Icon svgSrc={uploadImageIcon}></Icon>)
  .add('searchImage', () => <Icon svgSrc={searchImageIcon}></Icon>)
  .add('calOld', () => <Icon svgSrc={calOldIcon}></Icon>)
  .add('calNew', () => <Icon svgSrc={calNewIcon}></Icon>)
  .add('alphaAsc', () => <Icon svgSrc={alphaAscIcon}></Icon>)
  .add('search', () => <Icon svgSrc={searchIcon}></Icon>)
  .add('alphaDesc', () => <Icon svgSrc={alphaDescIcon}></Icon>)
  .add('word', () => <Icon svgSrc={wordIcon}></Icon>)
  .add('new with unchecked (clicked)', () => <Icon svgSrc={newIcon} unchecked={ true }></Icon>)
  .add('edit with unchecked (clicked)', () => <Icon svgSrc={editIcon} unchecked={ true }></Icon>)
  .add('sort with unchecked (clicked)', () => <Icon svgSrc={sortIcon} unchecked={ true }></Icon>)
  .add('delete with unchecked (clicked)', () => <Icon svgSrc={deleteIcon} unchecked={ true }></Icon>)
  .add('selectAll with unchecked (clicked)', () => <Icon svgSrc={selectAllIcon} unchecked={ true }></Icon>)
  .add('upload with unchecked (clicked)', () => <Icon svgSrc={uploadIcon} unchecked={ true }></Icon>)
  .add('uploadImage with unchecked (clicked)', () => <Icon svgSrc={uploadImageIcon} unchecked={ true }></Icon>)
  .add('searchImage with unchecked (clicked)', () => <Icon svgSrc={searchImageIcon} unchecked={ true }></Icon>)
  .add('calOld with unchecked (clicked)', () => <Icon svgSrc={calOldIcon} unchecked={ true }></Icon>)
  .add('calNew with unchecked (clicked)', () => <Icon svgSrc={calNewIcon} unchecked={ true }></Icon>)
  .add('alphaAsc with unchecked (clicked)', () => <Icon svgSrc={alphaAscIcon} unchecked={ true }></Icon>)
  .add('search with unchecked (clicked)', () => <Icon svgSrc={searchIcon} unchecked={ true }></Icon>)
  .add('alphaDesc with unchecked (clicked)', () => <Icon svgSrc={alphaDescIcon} unchecked={ true }></Icon>)
  .add('word with unchecked (clicked)', () => <Icon svgSrc={wordIcon} unchecked={ true }></Icon>)

