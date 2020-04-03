const execSync = require('child_process').execSync;
const boxen = require('boxen');

const branch_name = execSync(`git branch --contains`)
  .toString()
  .match(/\* (?:\(no branch, rebasing )?([^)\n]+)/)[1];

if (branch_name === 'develop' || branch_name === '_master') {
  console.error(
    boxen(`☠⚠️⚠️⚠️${branch_name}ブランチにpushしないで！！ from高沼⚠️⚠️⚠️️☠`, {
      borderStyle: 'double',
      align: 'center',
    })
  );
  //異常終了 push中止
  process.exit(1);
} else {
  //正常終了
  process.exit(0);
}
