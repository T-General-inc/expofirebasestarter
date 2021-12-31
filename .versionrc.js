const build = process.env.build? process.env.build : 'both';
const mode = process.env.mode? process.env.mode : 'development';

let fileName = 'appJson/app.json';
switch(mode){
    case 'production':{fileName='appJson/app.prod.json';break;}
    case 'staging':{fileName='appJson/app.staging.json';break;}
    default:{fileName='appJson/app.json';break;}
}

let bumpFiles = [];
let bumpVersion = true;
switch(build){
    case 'android':{ bumpFiles = [{fileName:fileName,updater:require.resolve('standard-version-expo/android/increment')}];break; }
    case 'ios':{ bumpFiles = [{fileName:fileName,updater:require.resolve('standard-version-expo/ios/increment')}];break; }
    default:{ bumpVersion=false;bumpFiles = [{fileName:fileName,updater:require.resolve('standard-version-expo')}];break; }
}

module.exports = {
    bumpFiles: bumpFiles,
    packageFiles: [
        {
            fileName: fileName,
            updater: require.resolve('standard-version-expo')
        }
    ]
}