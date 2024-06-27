<template>
  <div class="cart">
    <div></div>
    <div class="cart-content">
      <div class="cart-details">
        <ButtonInput class="!bg-white border !border-[rgb(0,144,255)]"
          ><span
            class="font-bold box-shado cart-input h-5 leading-tight mr-2 text-[rgb(0,144,255)]"
            >Speichern</span
          >
          <span
            class="i-mdi-download text-3xl size-5 text-[rgb(0,144,255)]"
          ></span>
        </ButtonInput>
      </div>
      <div class="cart-buttons">
        <div class="cart-info">
          <h2
            class="font-bold not-italic leading-none tracking-tight font-[Inter,_sans-serif] text-[rgb(23_23_23)]] text-3xl"
          >
            1.000,0 €<span
              class="relative inline-block not-italic"
              is="highlighted-text"
            >
            </span>
          </h2>
          <a class="cart-link">Kaufpreis + Montage</a>
        </div>
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
  @apply bg-white fixed bottom-0 w-full h-min p-8 z-20 shadow-xl-mid;
  border-radius: 11.3724px;
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
  @apply leading-none text-right flex flex-col justify-center mr-2;
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
