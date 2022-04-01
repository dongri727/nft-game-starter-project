// constants.js
const CONTRACT_ADDRESS = '0x4110465f8411D5f13b98D298F2C1393Cce8805d4';

//NFT キャラクター の属性をフォーマットしてオブジェクトとして返します。
const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  
  // 変数を constants.js 以外の場所でも使えるようにします。
  export { CONTRACT_ADDRESS, transformCharacterData };

