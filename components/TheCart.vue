<template>
  <div class="cart">
    <div></div>
    <div class="cart-content">
      <div class="cart-buttons">
        <!-- <button class="call-button">
          <span class="call-icon"></span>
          <div class="cart-info"></div>
        </button> -->
        <div class="cart-info">
          <p class="cart-price">12.000,00 €</p>
          <a class="cart-link">Weitere Informationen</a>
        </div>
      </div>
      <div class="cart-details">
        <ButtonInput
          ><span
            class="font-bold text-white box-shado cart-input h-5 leading-tight mr-2"
            >Anfragen</span
          >
          <span class="i-mdi-arrow-right text-3xl size-5 text-white"></span
        ></ButtonInput>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  @apply bg-white fixed bottom-0 w-full h-min p-9 z-20 shadow-xl-mid;
  border-radius: 23.7805px;
}

.cart-content {
  @apply flex gap-2 justify-between;
}

.cart-buttons {
  @apply flex gap-2;
}

.call-button {
  @apply w-14 aspect-square bg-transparent border-t border-t-gray-50 border-b-2 border-b-gray-200 rounded bg-gray-100;
}

.call-icon {
  @apply i-mdi-call text-2xl text-gray-500;
}

.cart-details {
  @apply flex gap-2;
}

.cart-info {
  @apply leading-none text-right;
}

.cart-price {
  @apply text-black text-xl font-semibold;
  font-size: 50.7558px;
}

.cart-link {
  @apply text-xs text-gray-500 underline cursor-pointer;
}

.cart-basket-button {
  @apply w-14 aspect-square bg-cyan rounded;
}

.basket-icon {
  @apply i-mdi-basket-fill text-2xl text-white;
}

.cart-input {
  font-size: 15.3756px;
  box-shadow: rgba(168, 232, 226, 0) 0px 0px 0px 0px;
  height: 20px;
}
</style>
