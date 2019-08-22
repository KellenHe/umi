import React from 'react';
import { Button } from 'antd';
import history from '@tmp/history';
import DepsInstall from '@/components/DepsInstall';
import OpenFile from './openFile';

export interface IHandler {
  type: string;
  path: string;
}

export default {
  '@@actions/reInstallDependencies': props => (
    <DepsInstall installType="reinstall" loadingChild="依赖安装中" {...props} />
  ),
  '@@actions/installDependencies': props => (
    <DepsInstall installType="install" loadingChild="依赖安装中" {...props} />
  ),
  BACK_TO_HOME: props => (
    <Button
      onClick={() => {
        history.replace('/project/select');
        window.location.reload();
      }}
      type={props.type}
    >
      返回首页
    </Button>
  ),
  '@@actions/openConfigFile': OpenFile,
  '@@project/openInEditor': OpenFile,
};