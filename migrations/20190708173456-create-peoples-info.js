'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PeoplesInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      AFG: {
        type: Sequelize.STRING(11)
      },
      ALB: {
        type: Sequelize.STRING(11)
      },
      DZA: {
        type: Sequelize.STRING(11)
      },
      ASM: {
        type: Sequelize.STRING(11)
      },
      AND: {
        type: Sequelize.STRING(11)
      },
      AGO: {
        type: Sequelize.STRING(11)
      },
      ATG: {
        type: Sequelize.STRING(11)
      },
      ARG: {
        type: Sequelize.STRING(11)
      },
      ARM: {
        type: Sequelize.STRING(11)
      },
      ABW: {
        type: Sequelize.STRING(11)
      },
      AUS: {
        type: Sequelize.STRING(11)
      },
      AUT: {
        type: Sequelize.STRING(11)
      },
      AZE: {
        type: Sequelize.STRING(11)
      },
      BHS: {
        type: Sequelize.STRING(11)
      },
      BHR: {
        type: Sequelize.STRING(11)
      },
      BGD: {
        type: Sequelize.STRING(11)
      },
      BRB: {
        type: Sequelize.STRING(11)
      },
      BLR: {
        type: Sequelize.STRING(11)
      },
      BEL: {
        type: Sequelize.STRING(11)
      },
      BLZ: {
        type: Sequelize.STRING(11)
      },
      BEN: {
        type: Sequelize.STRING(11)
      },
      BMU: {
        type: Sequelize.STRING(11)
      },
      BTN: {
        type: Sequelize.STRING(11)
      },
      BOL: {
        type: Sequelize.STRING(11)
      },
      BIH: {
        type: Sequelize.STRING(11)
      },
      BWA: {
        type: Sequelize.STRING(11)
      },
      BRA: {
        type: Sequelize.STRING(11)
      },
      VGB: {
        type: Sequelize.STRING(11)
      },
      BRN: {
        type: Sequelize.STRING(11)
      },
      BGR: {
        type: Sequelize.STRING(11)
      },
      BFA: {
        type: Sequelize.STRING(11)
      },
      BDI: {
        type: Sequelize.STRING(11)
      },
      CPV: {
        type: Sequelize.STRING(11)
      },
      KHM: {
        type: Sequelize.STRING(11)
      },
      CMR: {
        type: Sequelize.STRING(11)
      },
      CAN: {
        type: Sequelize.STRING(11)
      },
      CYM: {
        type: Sequelize.STRING(11)
      },
      CAF: {
        type: Sequelize.STRING(11)
      },
      TCD: {
        type: Sequelize.STRING(11)
      },
      CHL: {
        type: Sequelize.STRING(11)
      },
      CHN: {
        type: Sequelize.STRING(11)
      },
      HKG: {
        type: Sequelize.STRING(11)
      },
      MAC: {
        type: Sequelize.STRING(11)
      },
      COL: {
        type: Sequelize.STRING(11)
      },
      COM: {
        type: Sequelize.STRING(11)
      },
      COG: {
        type: Sequelize.STRING(11)
      },
      CRI: {
        type: Sequelize.STRING(11)
      },
      CIV: {
        type: Sequelize.STRING(11)
      },
      HRV: {
        type: Sequelize.STRING(11)
      },
      CUB: {
        type: Sequelize.STRING(11)
      },
      CYP: {
        type: Sequelize.STRING(11)
      },
      CZE: {
        type: Sequelize.STRING(11)
      },
      PRK: {
        type: Sequelize.STRING(11)
      },
      COD: {
        type: Sequelize.STRING(11)
      },
      DNK: {
        type: Sequelize.STRING(11)
      },
      DJI: {
        type: Sequelize.STRING(11)
      },
      DMA: {
        type: Sequelize.STRING(11)
      },
      DOM: {
        type: Sequelize.STRING(11)
      },
      ECU: {
        type: Sequelize.STRING(11)
      },
      EGY: {
        type: Sequelize.STRING(11)
      },
      SLV: {
        type: Sequelize.STRING(11)
      },
      GNQ: {
        type: Sequelize.STRING(11)
      },
      ERI: {
        type: Sequelize.STRING(11)
      },
      EST: {
        type: Sequelize.STRING(11)
      },
      ETH: {
        type: Sequelize.STRING(11)
      },
      FRO: {
        type: Sequelize.STRING(11)
      },
      FJI: {
        type: Sequelize.STRING(11)
      },
      FIN: {
        type: Sequelize.STRING(11)
      },
      FRA: {
        type: Sequelize.STRING(11)
      },
      PYF: {
        type: Sequelize.STRING(11)
      },
      GAB: {
        type: Sequelize.STRING(11)
      },
      GMB: {
        type: Sequelize.STRING(11)
      },
      GEO: {
        type: Sequelize.STRING(11)
      },
      DEU: {
        type: Sequelize.STRING(11)
      },
      GHA: {
        type: Sequelize.STRING(11)
      },
      GIB: {
        type: Sequelize.STRING(11)
      },
      GRC: {
        type: Sequelize.STRING(11)
      },
      GRL: {
        type: Sequelize.STRING(11)
      },
      GRD: {
        type: Sequelize.STRING(11)
      },
      GUM: {
        type: Sequelize.STRING(11)
      },
      GTM: {
        type: Sequelize.STRING(11)
      },
      GIN: {
        type: Sequelize.STRING(11)
      },
      GNB: {
        type: Sequelize.STRING(11)
      },
      GUY: {
        type: Sequelize.STRING(11)
      },
      HTI: {
        type: Sequelize.STRING(11)
      },
      HND: {
        type: Sequelize.STRING(11)
      },
      HUN: {
        type: Sequelize.STRING(11)
      },
      ISL: {
        type: Sequelize.STRING(11)
      },
      IND: {
        type: Sequelize.STRING(11)
      },
      IDN: {
        type: Sequelize.STRING(11)
      },
      IRN: {
        type: Sequelize.STRING(11)
      },
      IRQ: {
        type: Sequelize.STRING(11)
      },
      IRL: {
        type: Sequelize.STRING(11)
      },
      IMN: {
        type: Sequelize.STRING(11)
      },
      ISR: {
        type: Sequelize.STRING(11)
      },
      ITA: {
        type: Sequelize.STRING(11)
      },
      JAM: {
        type: Sequelize.STRING(11)
      },
      JPN: {
        type: Sequelize.STRING(11)
      },
      JOR: {
        type: Sequelize.STRING(11)
      },
      KAZ: {
        type: Sequelize.STRING(11)
      },
      KEN: {
        type: Sequelize.STRING(11)
      },
      KIR: {
        type: Sequelize.STRING(11)
      },
      KWT: {
        type: Sequelize.STRING(11)
      },
      KGZ: {
        type: Sequelize.STRING(11)
      },
      LAO: {
        type: Sequelize.STRING(11)
      },
      LVA: {
        type: Sequelize.STRING(11)
      },
      LBN: {
        type: Sequelize.STRING(11)
      },
      LSO: {
        type: Sequelize.STRING(11)
      },
      LBR: {
        type: Sequelize.STRING(11)
      },
      LBY: {
        type: Sequelize.STRING(11)
      },
      LIE: {
        type: Sequelize.STRING(11)
      },
      LTU: {
        type: Sequelize.STRING(11)
      },
      LUX: {
        type: Sequelize.STRING(11)
      },
      MDG: {
        type: Sequelize.STRING(11)
      },
      MWI: {
        type: Sequelize.STRING(11)
      },
      MYS: {
        type: Sequelize.STRING(11)
      },
      MDV: {
        type: Sequelize.STRING(11)
      },
      MLI: {
        type: Sequelize.STRING(11)
      },
      MLT: {
        type: Sequelize.STRING(11)
      },
      MHL: {
        type: Sequelize.STRING(11)
      },
      MRT: {
        type: Sequelize.STRING(11)
      },
      MUS: {
        type: Sequelize.STRING(11)
      },
      MEX: {
        type: Sequelize.STRING(11)
      },
      FSM: {
        type: Sequelize.STRING(11)
      },
      MCO: {
        type: Sequelize.STRING(11)
      },
      MNG: {
        type: Sequelize.STRING(11)
      },
      MNE: {
        type: Sequelize.STRING(11)
      },
      MAR: {
        type: Sequelize.STRING(11)
      },
      MOZ: {
        type: Sequelize.STRING(11)
      },
      MMR: {
        type: Sequelize.STRING(11)
      },
      NAM: {
        type: Sequelize.STRING(11)
      },
      NRU: {
        type: Sequelize.STRING(11)
      },
      NPL: {
        type: Sequelize.STRING(11)
      },
      NLD: {
        type: Sequelize.STRING(11)
      },
      NCL: {
        type: Sequelize.STRING(11)
      },
      NZL: {
        type: Sequelize.STRING(11)
      },
      NIC: {
        type: Sequelize.STRING(11)
      },
      NER: {
        type: Sequelize.STRING(11)
      },
      NGA: {
        type: Sequelize.STRING(11)
      },
      MNP: {
        type: Sequelize.STRING(11)
      },
      NOR: {
        type: Sequelize.STRING(11)
      },
      OMN: {
        type: Sequelize.STRING(11)
      },
      PAK: {
        type: Sequelize.STRING(11)
      },
      PLW: {
        type: Sequelize.STRING(11)
      },
      PAN: {
        type: Sequelize.STRING(11)
      },
      PNG: {
        type: Sequelize.STRING(11)
      },
      PRY: {
        type: Sequelize.STRING(11)
      },
      PER: {
        type: Sequelize.STRING(11)
      },
      PHL: {
        type: Sequelize.STRING(11)
      },
      POL: {
        type: Sequelize.STRING(11)
      },
      PRT: {
        type: Sequelize.STRING(11)
      },
      PRI: {
        type: Sequelize.STRING(11)
      },
      QAT: {
        type: Sequelize.STRING(11)
      },
      KOR: {
        type: Sequelize.STRING(11)
      },
      MDA: {
        type: Sequelize.STRING(11)
      },
      ROU: {
        type: Sequelize.STRING(11)
      },
      RUS: {
        type: Sequelize.STRING(11)
      },
      RWA: {
        type: Sequelize.STRING(11)
      },
      KNA: {
        type: Sequelize.STRING(11)
      },
      LCA: {
        type: Sequelize.STRING(11)
      },
      VCT: {
        type: Sequelize.STRING(11)
      },
      WSM: {
        type: Sequelize.STRING(11)
      },
      SMR: {
        type: Sequelize.STRING(11)
      },
      STP: {
        type: Sequelize.STRING(11)
      },
      SAU: {
        type: Sequelize.STRING(11)
      },
      SEN: {
        type: Sequelize.STRING(11)
      },
      SRB: {
        type: Sequelize.STRING(11)
      },
      SYC: {
        type: Sequelize.STRING(11)
      },
      SLE: {
        type: Sequelize.STRING(11)
      },
      SGP: {
        type: Sequelize.STRING(11)
      },
      SVK: {
        type: Sequelize.STRING(11)
      },
      SVN: {
        type: Sequelize.STRING(11)
      },
      SLB: {
        type: Sequelize.STRING(11)
      },
      SOM: {
        type: Sequelize.STRING(11)
      },
      ZAF: {
        type: Sequelize.STRING(11)
      },
      SSD: {
        type: Sequelize.STRING(11)
      },
      ESP: {
        type: Sequelize.STRING(11)
      },
      LKA: {
        type: Sequelize.STRING(11)
      },
      SDN: {
        type: Sequelize.STRING(11)
      },
      SUR: {
        type: Sequelize.STRING(11)
      },
      SWZ: {
        type: Sequelize.STRING(11)
      },
      SWE: {
        type: Sequelize.STRING(11)
      },
      CHE: {
        type: Sequelize.STRING(11)
      },
      SYR: {
        type: Sequelize.STRING(11)
      },
      TJK: {
        type: Sequelize.STRING(11)
      },
      MKD: {
        type: Sequelize.STRING(11)
      },
      THA: {
        type: Sequelize.STRING(11)
      },
      TLS: {
        type: Sequelize.STRING(11)
      },
      TGO: {
        type: Sequelize.STRING(11)
      },
      TON: {
        type: Sequelize.STRING(11)
      },
      TTO: {
        type: Sequelize.STRING(11)
      },
      TUN: {
        type: Sequelize.STRING(11)
      },
      TUR: {
        type: Sequelize.STRING(11)
      },
      TKM: {
        type: Sequelize.STRING(11)
      },
      TCA: {
        type: Sequelize.STRING(11)
      },
      TUV: {
        type: Sequelize.STRING(11)
      },
      UGA: {
        type: Sequelize.STRING(11)
      },
      UKR: {
        type: Sequelize.STRING(11)
      },
      ARE: {
        type: Sequelize.STRING(11)
      },
      GBR: {
        type: Sequelize.STRING(11)
      },
      USA: {
        type: Sequelize.STRING(11)
      },
      VIR: {
        type: Sequelize.STRING(11)
      },
      URY: {
        type: Sequelize.STRING(11)
      },
      UZB: {
        type: Sequelize.STRING(11)
      },
      VUT: {
        type: Sequelize.STRING(11)
      },
      VEN: {
        type: Sequelize.STRING(11)
      },
      VNM: {
        type: Sequelize.STRING(11)
      },
      YEM: {
        type: Sequelize.STRING(11)
      },
      ZMB: {
        type: Sequelize.STRING(11)
      },
      ZWE: {
        type: Sequelize.STRING(11)
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PeoplesInfos');
  }
};