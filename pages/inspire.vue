<template>
  <div class="bg">
      <v-app-bar fixed color="#001727" dark elevate-on-scroll scroll-target="#scrolling-techniques-7">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
          <v-toolbar-title>Titlessss</v-toolbar-title>
  
          <v-spacer></v-spacer>
          <div class=" pr-2">
              <v-btn text large dark @click="$router.push('/refound')">REFOUND POLICY</v-btn>
          </div>
          <div class=" ">
              <v-btn class="btn" large dark>SIGN IN</v-btn>
          </div>
      </v-app-bar>
      <div>
          <div class="flex justify-center h-screen pt-16">
              <div class=" w-full " style="background-image: url(https://www.img.in.th/images/40e09198369489c4aaca83ec13c9cdae.jpg)">
                  <div class="container flex items-center h-full ">
                      <div>
                          <h2 class="text-6xl font-bold text-white">EVERYTHING TO MAKE YOU </h2>
                          <h2 class="text-6xl font-bold text-white"> VPS SERVER HAPPY</h2>
                          <p class="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                          <div class="mt-6">
                              <v-btn class="btn" large dark>VPS Plans Starting from 1148 THB</v-btn>
                          </div>
                          <p class=" mt-3 text-gray-300">14-day money-back guarantee on all VPS purchases</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div>
          <h2 class="text-6xl text-center font-bold text-white">WE STAND HARDWARE QUALITY</h2>
          <div class="flex justify-center">
              <p class="text-center text-base max-w-4xl mt-3 text-gray-300">At EffortUnionGroup, you can rely
                  100% on quality hardware from leading brand manufacturers. We provide branded products
                  from Fujitsu, HPE and Dell, equipped with state-of-the-art server processors from Intel and AMD, memory from
                  Samsung and also high-performance SSD technology from Intel. The bottom line for you: Top performance and dependable stability!</p>
          </div>
          <div class="flex justify-center pt-8">
              <v-img max-height="500" max-width="1000" src="https://sv1.picz.in.th/images/2022/10/12/pXxOnk.png"></v-img>
          </div>
      </div>
  
      <div class=" pt-64">
          <div class="container">
              <div>
                  <h2 class="text-6xl font-bold text-white">VPS PLANS & PRICING </h2>
                  <p class=" mt-3 text-gray-300">TIP: choose a longer billing cycle for bigger discounts!</p>
              </div>
              <div class="flex justify-center flex-col space-x-3  md:flex-row">
                  <v-card class=" w-full my-12" height="652px">
                      <v-card-title>Basic</v-card-title>
                      <v-card-text>
                          <div class="flex">
                              <p class="font-color text-6xl font-bold">1148</p>
  
                              <p class=" text-gray-500 pl-3 pt-8 text-base ">THB /month</p>
                          </div>
                          <p class=" mt-3 text-gray-500">For Basic VPS</p>
  
                      </v-card-text>
  
                      <v-divider class="mx-4"></v-divider>
  
                      <v-card-text>
                          <div class="space-y-4">
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
  
                          </div>
  
                      </v-card-text>
  
                      <v-card-actions>
                          <div class="pt-36 flex justify-center">
                              <v-btn class="btn " x-large depressed dark>
                                  Get Started
                              </v-btn>
                          </div>
  
                      </v-card-actions>
  
                  </v-card>
                  <v-card class="  w-full card-color   my-12" height="652px">
                      <v-card-title class="text-white">Basic</v-card-title>
                      <v-card-text>
                          <div class="flex">
                              <p class="text-white text-6xl font-bold ">1148</p>
  
                              <p class="text-white pl-3 pt-8 text-base ">THB /month</p>
                          </div>
                          <p class=" mt-3 text-white">For Basic VPS</p>
  
                      </v-card-text>
  
                      <v-divider class="mx-4"></v-divider>
  
                      <v-card-text>
                          <div class="space-y-4">
                              <v-btn class="mx-2" icon color="#FFFF">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn> <span class="text-white">2 GB (2048 MB) RAM</span>
                              <br>
                              <v-btn class="mx-2" icon color="#FFFF">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn><span class="text-white">2 GB (2048 MB) RAM</span>
                              <br>
                              <v-btn class="mx-2" icon color="#FFFF">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn><span class="text-white">2 GB (2048 MB) RAM</span>
                              <br>
                              <v-btn class="mx-2" icon color="#FFFF">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn><span class="text-white">2 GB (2048 MB) RAM</span>
                              <br>
  
                          </div>
  
                      </v-card-text>
  
                      <v-card-actions>
                          <div class="pt-36 flex justify-center">
                              <v-btn class="btn-body-3  " x-large depressed>
                                  Get Started
                              </v-btn>
                          </div>
  
                      </v-card-actions>
  
                  </v-card>
                  <v-card class="   w-full my-12" height="652px">
                      <v-card-title>Basic</v-card-title>
                      <v-card-text>
                          <div class="flex">
                              <p class="font-color text-6xl font-bold">1148</p>
  
                              <p class=" text-gray-500 pl-3 pt-8 text-base ">THB /month</p>
                          </div>
                          <p class=" mt-3 text-gray-500">For Basic VPS</p>
  
                      </v-card-text>
  
                      <v-divider class="mx-4"></v-divider>
  
                      <v-card-text>
                          <div class="space-y-4">
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
  
                          </div>
  
                      </v-card-text>
  
                      <v-card-actions>
                          <div class="pt-36 flex justify-center">
                              <v-btn class="btn " x-large depressed dark>
                                  Get Started
                              </v-btn>
                          </div>
  
                      </v-card-actions>
  
                  </v-card>
                  <v-card class="   w-full my-12" height="652px">
                      <v-card-title>Basic</v-card-title>
                      <v-card-text>
                          <div class="flex">
                              <p class="font-color text-6xl font-bold">1148</p>
  
                              <p class=" text-gray-500 pl-3 pt-8 text-base ">THB /month</p>
                          </div>
                          <p class=" mt-3 text-gray-500">For Basic VPS</p>
  
                      </v-card-text>
  
                      <v-divider class="mx-4"></v-divider>
  
                      <v-card-text>
                          <div class="space-y-4">
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
                              <v-btn class="mx-2" icon color="#00C57E">
                                  <v-icon>mdi-heart</v-icon>
                              </v-btn>2 GB (2048 MB) RAM
                              <br>
  
                          </div>
  
                      </v-card-text>
  
                      <v-card-actions>
                          <div class="pt-36 flex justify-center">
                              <v-btn class="btn " x-large depressed dark>
                                  Get Started
                              </v-btn>
                          </div>
  
                      </v-card-actions>
  
                  </v-card>
              </div>
              <p class=" mt-3 text-center text-gray-300">14-day money-back guarantee on all VPS plans purchases</p>
  
          </div>
  
      </div>
  
      <div class="pt-64">
          <div class="flex">
              <div class="ml-16 w-1/2 ">
                  <h2 class="text-6xl font-bold text-white">OUR ENTIRE PACKAGE IS WELL TUNED </h2>
                  <p class=" mt-3 text-gray-300">We offer you all the features required to get your
                      server racing along. From cPanel, the most popular control panel for Linux
                      distributions, to the very latest Plesk Obsidian, right through to our
                      acclaimed PowerPanel. Take a closer look - it will be worth your while and Our website also has a website
                      certification mark from Department of Business Development as well</p>
                  <img class="w-24 h-16  " src="https://sv1.picz.in.th/images/2022/10/12/pXPjqv.png"></img>
  
              </div>
              <div class="flex justify-end w-1/2">
                  <img src="https://sv1.picz.in.th/images/2022/10/12/pXADma.png"></img>
              </div>
          </div>
  
      </div>
      <div class="pt-64">
          <div class="flex ">
              <div class="flex justify-end w-1/2">
                  <img src="https://sv1.picz.in.th/images/2022/10/12/pXsYwP.png"></img>
              </div>
              <div class="ml-12 w-1/2">
                  <h2 class="text-6xl font-bold text-white">WIDE SELECTION OF OPERATING SYSTEMS</h2>
                  <p class=" mt-3 text-gray-300">You get the latest and greatest operating system free<br>* ofcharge. You may select
                      the OS of your choice through your customer panel once your server has been activated.</p>
                  <br><br>
                  <h2 class="text-6xl font-bold text-white">WE’RE HERE 24/7 FOR YOU</h2>
                  <p class=" mt-3 text-gray-300">Meet our team. We’re proud of what we do and we’re here to help around the clock.</p>
  
              </div>
  
          </div>
  
      </div>
  
      <div class="pt-64 ">
          <div class="container">
              <h2 class="text-6xl text-center font-bold text-white">WIDE SELECTION OF OPERATING SYSTEMS</h2>
              <div class="flex justify-center">
                  <p class="text-center text-base max-w-4xl mt-3 text-gray-300">At EffortUnionGroup, you can rely
                      You get the latest and greatest operating system free* of charge. You may select the OS of your choice through your customer panel once your server has been activated.
                      <br><br>
                      *Windows Server 2012 R2 Standard* ($ 25 /month)</p>
              </div>
              <v-sheet class="w-full pt-24" color="#001727">
                  <v-slide-group multiple show-arrows>
                      <v-slide-item v-for="n in 25" :key="n">
                          <v-card class=" m-4" height="360px" width="380px" outlined>
                              <v-img height="180" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                              <v-card-title>Ubuntu 18.04 LTS</v-card-title>
                              <v-card-text>Run business critical workloads such as SQL Server with
                                  confidence using 48TB of memory, 64 sockets, and 2048 logical cores</v-card-text>
  
                          </v-card>
                      </v-slide-item>
                  </v-slide-group>
              </v-sheet>
          </div>
      </div>
  
      <div class="pt-64 ">
          <div class="container">
              <h2 class="text-6xl text-center font-bold text-white">GOOD QUESTION !</h2>
              <div class="flex justify-center">
                  <p class="text-center text-base max-w-4xl mt-3 text-gray-300">We will gladly answer any questions you may have: From Monday
                      to Saturday between 08:00AM and 08:00PM personally by telephone - and round-the-clock by email.
                  </p>
              </div>
  
          </div>
          <div class="container">
              <v-card class="w-full ">
                  <div class="  text-gray-600  ">
                      <div class="  flex">
                          <div class="w-1/2">
                              <img src="https://sv1.picz.in.th/images/2022/10/12/pXnXYz.png" alt="image" loading="lazy" class="h-full">
                          </div>
                          <div class="w-1/2 p-9">
                              <h2 class="pt-8 text-2xl text-gray-900 font-bold md:text-4xl">CONNECT WITH US</h2>
                              <p class="mt-6 text-gray-600">*Only the data marked with * are obligatory, all other data are voluntary.
                                  The data collected from you here will be processed by EffortUnionGroup to process your request. For more information, please follow this</p>
                              <br><br>
                              <p class="font-color ">link: www.effortuniongroup.com </p>
                              <br><br>
                              <div class="mr-12">
                                  <v-text-field label="Name *" outlined></v-text-field>
                                  <v-text-field label="Email *" outlined></v-text-field>
                                  <v-text-field label="Phone *" outlined></v-text-field>
                                  <v-text-field label="Sever name (Existing Customers)" outlined></v-text-field>
                                  <v-textarea label="Message" outlined></v-textarea>
                                  <v-card-actions>
                                      <div class="">
                                          <v-btn class="btn " x-large depressed dark>
                                              SEND QUESTION
                                          </v-btn>
                                      </div>
  
                                  </v-card-actions>
                              </div>
                          </div>
  
                      </div>
                  </div>
  
              </v-card>
          </div>
  
      </div>
      <v-footer color="#001727" class="mt-16">
          <div class="flex "> 
              <div class="w-1/2">
                <p class="text-white">Copyright © 2020 www.effortuniongroup.com All rights reserved.</p>
              </div>
              <div class="w-1/2 flex justify-end">
                <p class="text-white">Effort Union group Co.,Ltd.
                  <br>
                  No.1 Phomphan2 building , 2nd floor, Ladprao3 , Chomphon, Chatujak , Bangkok, 10900.
                </p>
              </div>
          </div>
  
      </v-footer>
  
  </div>
  </template>
  
  <script>
  export default {
      name: 'DefaultLayout',
      data: () => ({
          model: null,
      }),
  }
  </script>
  
  <style>
  .bg {
      background: #001727;
  }
  
  .btn {
      background: linear-gradient(106.75deg, #00C57E 0%, #00F1A2 100%);
      border-radius: 10px;
  }
  
  .btn-body-3 {
      background: #FFFF;
      border-radius: 10px;
  }
  
  .font-color {
      color: #00C57E;
  }
  
  .card-color {
      background: linear-gradient(106.75deg, #00F1A2 0%, #00A36C 100%);
      box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
  }
  </style>
  