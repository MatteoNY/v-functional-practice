<template>
	<div class="hello">
		<h2>Vue / Vuex data driven proof-of-concept -- using functional programming techniques</h2>
		<h2>Display toute image with caption depending on value</h2>
		<section v-for="(item, i) in lookup" :key="`a${i}`">
			<button @click="touteHandler(item, i)">Load toute image filtered by: {{item}}</button>
			
			<div v-if="getTouteObj.index === i">
				<img :src="toute.touteImg" width="100">
				<p>{{toute.touteText}}</p>
			</div>
		</section>
		<button @click="touteHandler(null, null)">hide</button>

		<hr>

		<h2>Display list of data based on category</h2>

		<section v-for="(item, i) in lookupPairs" :key="`b${i}`">
			<button	@click="fareTextHandler(item.key, item.value, i)">Load text filtered by: {{item.key}} {{item.value}}</button>
		</section>
				<button	@click="fareTextHandler(null)">Reset</button>
		<hr>

		<div v-for="(item, i) in fareCompareTextData" :key="`c${i}`">
			<div v-for="(innerItem, i) in item" :key="`inner-${i}`">
				{{innerItem.ico}}
				{{innerItem.text}}
			</div>
		</div>
		 
	</div>
</template>

<script>
import farecompare from "@/store/modules/fare-compare.module";
import { mapGetters } from "vuex";

export default {
	name: "HelloWorld",
	props: {
		msg: String
	},
	data: () => ({
		touteImg: "",
		touteText: "",
		fareCompareTextData: "",
		lookup: ["L", "M", "H"],
		lookupPairs: [
			{ key: "L", value: "LR" },
			{ key: "L", value: "LB" },
			{ key: "M", value: "MB" },
			{ key: "H", value: "HB" },
			{ key: "H", value: "HR" }
		]
	}),
	beforeMount() {
		this.$store.dispatch(`fare-compare/LOAD_FARE_COMPARE_DATA`);
	},
	mounted() {
		//this.$store.registerModule('fare-compare', farecompare)
		// this.$store.dispatch(`fare-compare/LOAD_FARE_COMPARE_DATA`);
	},
	beforeDestroy() {
		//  this.$store.unregisterModule('fare-compare')
	},
	methods: {
		fareTextHandler(key, value, idx) {
			if (key) {
				this.$store.dispatch(`fare-compare/SET_FARE_TEXT_OBJ`, {
					index: idx,
					key: key,
					value: value
				});
				this.fareCompareTextData = this.getFareTextByKey(key, value);
			} else {
				//reset
				this.fareCompareTextData = this.getFareTextByKey(null, null);
				this.$store.dispatch(`fare-compare/SET_FARE_TEXT_OBJ`, {
					index: null
				});
			}
			
		},
		touteHandler(key, idx) {
			this.getTouteByKey(key, idx);
		},
		getTouteByKey(key, idx) {
			if (key) {
				const results = this.$store.getters['fare-compare/GET_FARE_TOUTE_LOOKUP'](key);		 
				this.touteImg = results.touteImg;
				this.touteText = results.touteText;
				this.$store.dispatch(`fare-compare/SET_TOUTE_OBJ`, {
					index: idx,
					img: results.touteImg,
					text: results.touteText
				});
			} else {
				// reset
				this.$store.dispatch(`fare-compare/SET_TOUTE_OBJ`, {
					index: null
				});
			}

			
		},
		getFareTextByKey(key, val) {
			return this.$store.getters["fare-compare/GET_FARE_COMPARE_DATA"](
				key,
				val
			);
		}
	},
	computed: {
		...mapGetters("fare-compare", {
			getTouteObj: "GET_TOUTE_OBJ",
			getFareTextObj: "GET_FARE_TEXT_OBJ"
		}),
		toute: {
			get: function() {
				return { touteImg: this.touteImg, touteText: this.touteText } || null;
			},
			set: function(newValue) {
				this.touteImg = newValue.touteImg;
				this.touteText = newValue.touteText;
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
