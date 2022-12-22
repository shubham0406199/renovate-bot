module.exports = {
  endpoint: 'https://github.com/api/v3',
  hostRules:[
  {
      hostType:'github',
      matchHost:'github.com'
  }
  ],
  autodiscover:false,
  repositories:[],
  "pre-commit":{
  }
};
  
