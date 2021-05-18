<template>
  <div>
    <div class="background-image">
      <div class="container">
        <HeaderNav class="pt-100" />
      </div>
      <h2 class="text-center">Liste des équipes</h2>
      <div class="text-center space">
        <select name="choix du tournois" v-model="TournamentChoice" id="">
          <option value="" disabled>Liste des tournois disponibles</option>
          <option value="test">Champions League of Paladins</option>
        </select>
      </div>
      <div class="container-body">
        <div class="d-flex margin">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
        <div class="d-flex margin">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
        <div class="d-flex margin">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
        <div class="d-flex">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </div>
    <FooterNav />
  </div>
</template>

<script>
import HeaderNav from '../../components/layout/TheNavBar.vue';
import FooterNav from '../../components/layout/TheFooter.vue';
import TeamCard from '../../components/common/TeamCard.vue';
export default {
  components: {
    HeaderNav,
    FooterNav,
    TeamCard,
  },
  data() {
    return {
      TournamentChoice: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.background-image {
  background-image: url(../../src/assets/background/TeamPage2nd.jpg);
  background-repeat: no-repeat;
  background-color: #080b15;
}
select,
option {
  background: linear-gradient(180deg, #c5400f 0%, #b91911 100%);
  padding: 15px 17px;
  border: none;
}
.container-body {
  width: 1272px;
  margin: 0 auto;
}
.margin {
  margin-bottom: 48px;
}
.space {
  margin: 48px 0 112px 0;
}
</style>
