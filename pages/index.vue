<template>
<div class=" ">
    <v-app-bar fixed color="#001727" dark elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-toolbar-title class="font-bold cursor-pointer">
            Effort
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <div class=" pr-2">
            <v-btn text large dark @click="$router.push('/refound')">REFOUND POLICY</v-btn>
        </div>
        <div class=" ">
            <v-btn class="btn" large dark>SIGN IN</v-btn>
        </div>
    </v-app-bar>
    <div  >
        <div class="flex justify-center h-screen pt-16">
            <div class=" w-full " style="background-image: url(https://www.img.in.th/images/40e09198369489c4aaca83ec13c9cdae.jpg)">
                <div class="container pt-16 items-center h-full ">
                    <h2 class="text-6xl font-bold text-white">EVERYTHING TO MAKE YOU </h2>
                    <h2 class="text-6xl font-bold font-color"> VPS SERVER HAPPY</h2>
                    <ul class="pt-8 list-disc marker:text-green-400 ">
                        <div class="flex flex-col md:flex-row">
                            <li class="text-justify text-white "> Choose your server location</li>
                            <br>
                            <div v-if="!$vuetify.breakpoint.mobile">
                                <li class="text-justify  text-white ml-20">Technical support available 24/7</li> 
                            </div>
                           
                            <div v-if="$vuetify.breakpoint.mobile">
                                <li class="text-justify  text-white ">Technical support available 24/7</li> 
                            </div> 
                        </div>
                        <br> 
                        <div class="flex flex-col md:flex-row">
                            <li class="text-justify text-white "> VPS Servers with a 100% uptime</li>
                            <br>
                            <div v-if="!$vuetify.breakpoint.mobile">
                                <li class="text-justify  text-white ml-12">Lightning-fast SSD</li> 
                            </div>
                           
                            <div v-if="$vuetify.breakpoint.mobile">
                                <li class="text-justify  text-white ">Lightning-fast SSD</li> 
                            </div> 
                        </div>
                        <br> 
                        <div class="flex flex-col md:flex-row">
                            <li class="text-justify text-white mr-5"> Unlimited traffic</li>
                            <br>
                            <div v-if="!$vuetify.breakpoint.mobile">
                                <li class="text-justify  text-white ml-36">Between us server-geeks</li> 
                            </div>
                           
                            <div v-if="$vuetify.breakpoint.mobile">
                                <li class="text-justify  text-white ">Between us server-geeks</li> 
                            </div> 
                        </div>

                    </ul>
                    <div class="pt-12">
                        <v-btn class="btn" large dark>VPS Plans Starting from 1148 THB</v-btn>
                    </div>
                    <p class=" mt-3 text-gray-300">14-day money-back guarantee on all VPS purchases</p>
                </div>
            </div>
        </div>

    </div>
    <div>
        <div class="pt-16">
            <h2 class="text-6xl  text-center font-bold text-white">WE STAND HARDWARE <span class="font-color">QUALITY</span> </h2>
        </div>

        <div class="flex justify-center">
            <p class="p-3 text-center text-base max-w-4xl mt-3 text-gray-300">At EffortUnionGroup, you can rely
                100% on quality hardware from leading brand manufacturers. We provide branded products
                from Fujitsu, HPE and Dell, equipped with state-of-the-art server processors from Intel and AMD, memory from
                Samsung and also high-performance SSD technology from Intel. The bottom line for you: Top performance and dependable stability!</p>
        </div>
        <div class="flex p-3 justify-center pt-8">
            <img src="https://sv1.picz.in.th/images/2022/10/12/pXxOnk.png" />
        </div>
    </div>

    <div class=" pt-64">
        <div class="container">
            <div class="flex justify-start">
                <h2 class="text-6xl font-bold text-white">VPS <span class="font-color">PLANS & PRICING</span> </h2>
            </div>
            <p class=" mt-3 text-gray-300">TIP: choose a longer billing cycle for bigger discounts!</p>
            <div class="flex justify-start flex-col md:flex-row -ml-2">
                <v-card class=" w-full m-2 mt-12 " height="652px">
                    <v-card-title  > <span class="font-bold">Basic</span> </v-card-title>
                    <v-card-text>
                        <div class="flex">
                            <p class="font-color text-6xl font-bold">1148</p>

                            <p class=" text-gray-500 pl-3 pt-8 text-base ">THB /month</p>
                        </div>
                        <p class=" mt-3 text-gray-500">For Basic VPS</p>

                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-text>
                        <div class=" ">
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>2 GB (2048 MB) RAM
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>1 Core CPU
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>60 GB SSD Disk
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>Window 2012/ 22
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>Dedicated IP address
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <div class="pt-12 flex justify-center">
                            <v-btn class="btn " x-large depressed dark>
                                Get Started
                            </v-btn>
                        </div>

                    </v-card-actions>

                </v-card>

                <v-card class="card-color  w-full m-2  mt-12 " height="652px">
                    <v-card-title class="text-white"> <span class="font-bold">Basic +</span></v-card-title>
                    <v-card-text>
                        <div class="flex">
                            <p class="  text-6xl font-bold text-white">1300</p>

                            <p class="   pl-3 pt-8 text-base text-white">THB /month</p>
                        </div>
                        <p class=" mt-3   text-white">For Plus Basic VPS</p>

                    </v-card-text>

                    <v-divider class="mx-4 btn-body-4"  ></v-divider>

                    <v-card-text>
                        <div class="text-white ">
                            <v-btn class="mx-2" icon>
                                <v-icon color="#FFFF">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>2.5 GB (2560 MB) RAM
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#FFFF">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>2 Core CPU
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#FFFF">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>80 GB SSD Disk
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#FFFF">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>Window 2012/ 16/19/22
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#FFFF">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>Dedicated IP address
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <div class=" pt-12 flex justify-center">
                            <v-btn class="btn-body-4" x-large depressed>
                                Get Started
                            </v-btn>
                        </div>

                    </v-card-actions>

                </v-card>

                <v-card class=" w-full m-2 mt-12 " height="652px">
                    <v-card-title> <span class="font-bold">Standard</span></v-card-title>
                    <v-card-text>
                        <div class="flex">
                            <p class="font-color text-6xl font-bold">1951</p>

                            <p class=" text-gray-500 pl-3 pt-8 text-base ">THB /month</p>
                        </div>
                        <p class=" mt-3 text-gray-500">For Standard VPS</p>

                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-text>
                        <div class=" ">
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>4 GB (4096 MB) RAM
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>2 Core CPU
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>90 GB SSD Disk
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>Window 2012/ 16/19/22
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>Dedicated IP address
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <div class="pt-12 flex justify-center">
                            <v-btn class="btn " x-large depressed dark>
                                Get Started
                            </v-btn>
                        </div>

                    </v-card-actions>

                </v-card>

                <v-card class=" w-full m-2  mt-12 " height="652px">
                    <v-card-title> <span class="font-bold">High Freq</span></v-card-title>
                    <v-card-text>
                        <div class="flex">
                            <p class="font-color text-6xl font-bold">2257</p>

                            <p class=" text-gray-500 pl-3 pt-8 text-base ">THB /month</p>
                        </div>
                        <p class=" mt-3 text-gray-500">For High Freq VPS</p>

                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-text>
                        <div class=" ">
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>3 GB (3072 MB) RAM
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>1 Core (3.4 GHz) CPU
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>70 GB SSD Disk
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>Window 2012/ 16/19
                            <br>
                            <br>
                            <v-btn class="mx-2" icon>
                                <v-icon color="#00C57E">mdi-checkbox-marked-circle</v-icon>
                            </v-btn>Dedicated IP address
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <div class="pt-12 flex justify-center">
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
        <div class="container">
            <div class="flex flex-col md:flex-row">
                <div class=" w-full lg:w-1/2 xl:w-1/2 ">
                    <h2 class="text-6xl font-bold text-white text-left md:text-center">OUR <span class="font-color">ENTIRE</span> PACKAGE IS WELL TUNED </h2>
                    <p class=" p-2 mt-3 text-gray-300">We offer you all the features required to get your
                        server racing along. From cPanel, the most popular control panel for Linux
                        distributions, to the very latest Plesk Obsidian, right through to our
                        acclaimed PowerPanel. Take a closer look - it will be worth your while and Our website also has a website
                        certification mark from Department of Business Development as well</p>
                    <img class="w-36 h-16  " src="https://sv1.picz.in.th/images/2022/10/12/pXPjqv.png"></img>
                </div>
                <div class="flex justify-end w-full lg:w-1/2 xl:w-1/2">
                    <img src="https://sv1.picz.in.th/images/2022/10/12/pXADma.png"></img>
                </div>
            </div>

        </div>
    </div>

    <div class="pt-64">
        <div class="container">
            <div class="flex flex-col md:flex-row">
                <div class="  w-full lg:w-1/2 xl:w-1/2">
                    <img src="https://sv1.picz.in.th/images/2022/10/12/pXsYwP.png"></img>
                </div>
                <div class="pl-12 md:pl-1  w-full lg:w-1/2 xl:w-1/2">
                    <h2 class="text-5xl font-bold text-white">WIDE SELECTION OF <span class="font-color">OPERATING SYSTEMS </span> </h2>
                    <p class=" mt-3 text-gray-300">You get the latest and greatest operating system free<br>* ofcharge. You may select
                        the OS of your choice through your customer panel once your server has been activated.</p>
                    <br><br>
                    <h2 class="text-6xl font-bold text-white">WE’RE HERE <span class="font-color">24/7</span> FOR YOU</h2>
                    <p class=" mt-3 text-gray-300">Meet our team. We’re proud of what we do and we’re here to help around the clock.</p>

                </div>
            </div>
        </div>
    </div>

    <div class="pt-64 ">
        <div class="container">
            <h2 class="text-5xl text-center font-bold text-white">WIDE SELECTION OF OPERATING <span class="font-color">SYSTEMS</span> </h2>
            <div class="flex justify-center">
                <p class="text-center text-base max-w-4xl mt-3 text-gray-300">At EffortUnionGroup, you can rely
                    You get the latest and greatest operating system free* of charge. You may select the OS of your choice through your customer panel once your server has been activated.
                    <br><br>
                    *Windows Server 2012 R2 Standard* ($ 25 /month)</p>
            </div>
            <v-sheet class="w-full pt-24" color="#001727">
                <v-slide-group multiple show-arrows prev-icon="mdi-arrow-left-circle-outline" next-icon="mdi-arrow-right-circle-outline">
                    <v-slide-item v-for="sildeOS in sildeOS" :key="i">
                        <v-card class=" m-3" height="360px" width="360px" outlined>
                            <div class="flex justify-center">
                                <v-img max-height="180" max-width="250" :src="sildeOS.image"></v-img>
                            </div>
                            <v-card-title>{{sildeOS.name}}</v-card-title>
                            <v-card-text>{{sildeOS.detail}}</v-card-text>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </div>
    </div>

    <div class="pt-64 ">
        <div class="container">
            <h2 class="text-6xl text-center font-bold text-white">GOOD <span class="font-color"> QUESTION !</span></h2>
            <div class="flex justify-center">
                <p class="text-center text-base max-w-4xl mt-3 text-gray-300">We will gladly answer any questions you may have: From Monday
                    to Saturday between 08:00AM and 08:00PM personally by telephone - and round-the-clock by email.
                </p>
            </div>

        </div>
        <div class="container">
            <v-card class="w-full ">
                <div class="  text-gray-600  ">
                    <div class=" flex flex-col md:flex-row ">
                        <div class="w-full lg:w-1/2 xl:w-1/2">
                            <img src="https://sv1.picz.in.th/images/2022/10/12/pXnXYz.png" alt="image" loading="lazy" class="h-full">
                        </div>
                        <div class="w-full lg:w-1/2 xl:w-1/2 p-9">
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
        <div class="flex flex-col md:flex-row">
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
        sildeOS: [{
                image: 'https://www.img.in.th/images/371db5428f283c0f202677e9642ae0d2.jpg',
                name: 'Windows Server 2016 (standard)',
                detail: 'Run business critical workloads such as SQL Server with confidence using 48TB of memory, 64 sockets, and 2048 logical cores',
            },
            {
                image: 'https://www.img.in.th/images/6ab214f7ee44bc5f162fb2972addd98f.jpg',
                name: 'Ubuntu 18.04 LTS',
                detail: 'The server install image allows you to install Ubuntu permanently on a computer for use as a server. It will not install a graphical user interface',
            },
            {
                image: 'https://www.img.in.th/images/a58ae444e97ccc4af658be2ed7fcd51d.png',
                name: 'Debian 8',
                detail: 'Debian does not impose hardware requirements beyond the requirements of the Linux or kFreeBSD kernel and the GNU tool-sets. Therefore, any architecture or platform',
            },
            {
                image: 'https://www.img.in.th/images/9c13f1e8c44e87e9ac6f90e82ab6815e.png',
                name: 'CentOS 7',
                detail: 'In December 2020, the CentOS community and Red Hat announced the sunset of CentOS. Red Hat also announced CentOS Stream, a new, upstream development platform for the CentOS community.  ',
            },

            {
                image: 'https://www.img.in.th/images/2a342306695f228811f4a368d4d25d18.jpg',
                name: 'Linux',
                detail: ' More than Linux. Security and compliance for the full stack Secure your open source apps. Patch the full stack, from kernel to library and applications, for CVE compliance.',
            },
        ]
    }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap');
* {
    font-family: 'Open Sans', sans-serif
}
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
.btn-body-4 {
    background: #FFFF;
    border-radius: 10px;
}

.font-color {
    color: #00C57E;
}

.my-slider>.v-slide-group__next.theme--light.v-icon {
    color: #FFFF !important;

}

.card-color {
    background: linear-gradient(106.75deg, #00F1A2 0%, #00A36C 100%);
    box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
</style>
