<template>
  <v-container>
    <v-row no-gutters>
      <div class="header-page">
        <v-col>
          <header>
            <div class="text-h4 text-primary">Notificações</div>
          </header>
        </v-col>
        <v-col cols="2">
          <v-btn variant="flat" color="secondary" class="btn-primary">
            Adicionar
          </v-btn>
        </v-col>
        <v-col cols="2">
          <div
            class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height"
          >
            <v-text-field
              density="compact"
              variant="solo"
              label="Pesquisar"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
            ></v-text-field>
          </div>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<style lang="scss">
@media (min-width: 1280px) {
  .v-container {
    max-width: 100% !important;
  }
}
.header-page {
  width: 100%;
  display: flex;
  align-items: center;
  .title-page {
    color: #005356;
    font-size: 3rem;
  }
  .btn-primary {
    background-color: #80c340 !important;
    color: #ffffff !important;
    min-width: 64px;
    border-radius: 4px;
    width: 180px;
    font-weight: 500;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    line-height: 3.5;
    min-height: 45px;
    float: right;
    &:hover {
      background: #80c34090 !important;
    }
  }

  .v-field {
    border-radius: 3rem;
    box-shadow: none;
    font-size: 1rem;
    min-height: 45px;
    line-height: 1.75;
  }
}

.dialog-page {
  .v-card {
    padding: 1.4rem;
  }
  .v-card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .v-card-text {
    padding: 16px 10px 10px !important;
  }
  .v-card-actions {
    display: flex;
    justify-content: flex-end;
    .v-btn {
      background-color: #80c340 !important;
      color: #ffffff !important;
      min-width: 64px;
      border-radius: 4px;
      width: 180px;
      font-weight: 500;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      line-height: 3.5;
      min-height: 45px;
      float: right;
    }
  }
}

.v-pagination__list {
  justify-content: flex-end !important;
}
</style>
