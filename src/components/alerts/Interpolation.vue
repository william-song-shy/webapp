<template>
  <div
    class="alert alert-warning alert-dismissible fade show"
    role="alert"
  >
    <i18n-t
      keypath="$interpolationAlert"
    >
      <template
        v-if="stations?.length > 0"
        #stations
      >
        <template
          v-for="(station, index) in stations"
          :key="station"
        >
          <router-link
            :to="`/station/${station}`"
            class="text-dark"
          >
            <em>#{{ station }}</em>
          </router-link>
          <span v-if="index < stations.length - 1">, </span>
        </template>
      </template>
    </i18n-t>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      :aria-label="t('close')"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'InterpolationAlert',

  props: {
    stations: {
      type: Array,
      default: () => []
    }
  },

  setup() {
    const { t } = useI18n()

    return { t }
  },
})
</script>

<i18n>
{
  "en": {
    "$interpolationAlert": "Interpolated data based on nearby weather stations ({stations})."
  },
  "de": {
    "$interpolationAlert": "Gerechnete Werte, basierend auf Wetterstationen in der Nähe ({stations})."
  },
  "it": {
    "$interpolationAlert": "Dati interpolati basati su stazioni meteorologiche vicine ({stations})."
  },
  "es": {
    "$interpolationAlert": "Datos interpolados basados en estaciones meteorológicas cercanas ({stations})."
  },
  "nl": {
    "$interpolationAlert": "Geïnterpoleerde gegevens op basis van nabijgelegen weerstations ({stations})."
  },
  "fr": {
    "$interpolationAlert": "Données interpolées basées sur les stations météorologiques proches ({stations})."
  },
  "pt": {
    "$interpolationAlert": "Dados interpolados baseados em estações meteorológicas próximas ({stations})."
  },
  "ru": {
     "$interpolationAlert": "Интерполированные данные, основанные на данных близлежащих метеостанций ({stations})."   
  }
}
</i18n>