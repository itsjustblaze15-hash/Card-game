
(function(){
 try{
  const user=localStorage.getItem("gpActiveUserV1");
  if(!user)return;
  const payload=localStorage.getItem("gpUserSaveV1:"+user);
  if(!payload)return;
  localStorage.setItem("goldenPullsSave",payload);
  localStorage.setItem("goldenPullsV2",payload);
  localStorage.setItem("goldenPullsV1",payload);
 }catch(e){console.warn("GP account bootstrap skipped",e)}
})();
