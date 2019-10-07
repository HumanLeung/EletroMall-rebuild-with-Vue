<template>
<div class="section-3-container" data-aos="slide-up">
    <div class="sponsor">
     <sponsor/>
    </div>
    <div class="recomm">
     <recomm/>
    </div>
</div>
</template>
<script>
import sponsor from './sponsor'
import recomm from '../comomComps/recommondatd'
export default {
/* eslint-disable */ 
components: {sponsor,
recomm
}
}
</script>
<style>
.section-3-container
{
   width: 100%;
   margin-left: auto;
   margin-right: auto;
}
.recomm {
    width: 1470px;
    height: 370px;
    margin-left: auto;
    margin-right: auto;
}
.sponsor
{
  height: 74.375px;
  width: 1470px;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width:1200px){
  .section-3-container
  {
    margin-top: 20px;
  }
  .recomm
  {
    width: 90%;
  }
}
@media screen and (max-width:600px){
  .recomm{
    display: none;
  }
  .sponsor
  {
    width: auto;
  }
}
</style>
