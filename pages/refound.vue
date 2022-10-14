<template>
<div class="bg">
    <v-app-bar fixed color="#001727" dark elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-toolbar-title @click="$router.push('/')" class="font-bold cursor-pointer">
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

    <div class=" pt-16">
        <h2 class="text-5xl text-center font-bold text-white">REFOUND <span class="font-color">POLICY</span> & SERVICE <span class="font-color">PAYMENT</span></h2>
    </div>
    <div class="pt-20">
        <div class="container">
            <div class="flex  flex-col md:flex-row">
                <div class="flex justify-end w-full lg:w-1/2 xl:w-1/2">
                    <img src="https://www.img.in.th/images/e1805e2e6d6b9abce9c9581214fddbf3.png"></img>
                </div>
                <div class="w-full lg:w-1/2 xl:w-1/2">
                    <div class="container ">
                        <h2 class="text-4xl font-bold text-white">We are happy to <span class="font-color">refund</span> with in 30 days</h2>
                        <p class=" mt-3 text-gray-300">
                            <ul class="list-disc marker:text-green-400">
                                <li class="text-justify mr-8"> We are happy to refund within 30 days from the start date of the customer.
                                    And without any conditions in all cases,
                                    refunds will be made. Deduct the domain registration fee 400 baht.
                                    The customer still has the domain rights completely.
                                </li>
                                <br>
                                <li class="text-justify mr-8">Refunds after 30 days are possible, and we will decide on our own. from the reality
                                    of the problem that arises from us or
                                    from the customer and a refund will be charged from the full price minus the domain cost. and divide by the
                                    number of months ordered We will pay back the remaining months.

                                </li>
                                <br>
                                <li class="text-justify mr-8"> In the event that the customer is damaged Due to the website Down and causing
                                    damage to information or E-mail, we are willing to increase the duration
                                    of use for customers. However, it must be considered from the fact
                                </li>
                                <br>
                                <li class="text-justify mr-8"> In the event that customer data is damaged or lost in any case or
                                    due to device failure, the service
                                    provider reserves the right of responsibility even though we provide weekly backup service. but cannot
                                    guarantee that The information will be accurate and complete in the event of a device failure.

                                </li>
                                <br>
                                <li class="text-justify mr-8"> Refunds will be refunded within the next billing cycle of the month or
                                    no later than 30 days after service cancellation notification.
                                </li>
                                <br>
                                <li class="text-justify mr-8"> We reserve the right to change information. Warranty conditions without prior
                                    notice
                                </li>

                            </ul>
                        </p>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <div class="pt-64">
        <div class="container">
            <div class="flex  flex-col md:flex-row">
                <div class="w-full lg:w-1/2 xl:w-1/2 ">
                    <h2 class="text-4xl font-bold text-white">Terms of service <span class="font-color">payment</span> </h2>
                    <p class=" mt-3 text-gray-300">
                        <ul class="list-disc marker:text-green-400">
                            <li class="text-justify mr-8">15 days prior to the payment due date, we will email you the
                                next month's billing amount. with all details to your Contact E-mail. Prepaid customers will not receive such e-mail.
                            </li>
                            <br>
                            <li class="text-justify  mr-8">Refunds after 30 days are possible, and we will decide on our own. from the reality
                                of the problem that arises from us or
                                from the customer and a refund will be charged from the full price minus the domain cost. and divide by the
                                number of months ordered We will pay back the remaining months.

                            </li>
                            <br>
                            <li class="text-justify mr-8 "> Payment of service fee will be counted when fax or scan is done.
                                Send proof of payment to us. If Fax, write the website name on the payment slip or if Scan,
                                write the website name and attach the file to the email. come with me every time

                            </li>
                            <br>
                            <li class="text-justify mr-8 "> You must pay for the service before the due date. You have not paid the service fee.
                                We will email you to notify you. If you have already paid Please
                                notify us before the due date.

                            </li>
                            <br>
                            <li class="text-justify mr-8"> If you wish to pay late, please notify us 5 working days in advance,
                                we can give you up to 10 working days if you don't notify us. in advance that the payment will be late We will
                                disable your FTP service on the due date of payment.
                            </li>
                            <br>
                            <li class="text-justify mr-8"> If it is past the due date to pay for the service, we will adjust another 50 baht + normal service fee.
                            </li>
                            <br>
                            <li class="text-justify mr-8"> If it is 5 days past the due date for payment, we have not received proof of
                                payment, we will close the service until payment is made.

                            </li>

                        </ul>
                    </p>
                </div>
                <div class="flex justify-end w-full lg:w-1/2 xl:w-1/2">
                    <img src="https://www.img.in.th/images/52382d9fc67e7bc947e82c7ad07ddbff.png"></img>
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
    name: 'Refound',
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

.font-color {
    color: #00C57E;
}

.card-color {
    background: linear-gradient(106.75deg, #00F1A2 0%, #00A36C 100%);
    box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
</style>
