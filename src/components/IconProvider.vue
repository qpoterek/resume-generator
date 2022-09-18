<script>
import Briefcase from '~icons/fluent-emoji/briefcase'
import Browser from '~icons/ph/browser-fill'
import ChatsCircle from '~icons/ph/chats-circle-fill'
import Envelope from '~icons/ph/envelope-fill'
import FlagEnglish from '~icons/circle-flags/uk'
import FlagEsperanto from '~icons/circle-flags/so'
import FlagFrench from '~icons/circle-flags/fr'
import FlagGerman from '~icons/circle-flags/de'
import Globe from '~icons/fluent-emoji/globe-showing-europe-africa'
import GraduationCap from '~icons/fluent-emoji/graduation-cap'
import LightBulb from '~icons/fluent-emoji/light-bulb'
import LinkedInLogo from '~icons/ph/linkedin-logo-fill'
import PenNib from '~icons/ph/pen-nib-fill'
import Phone from '~icons/ph/phone-fill'
import PushPin from '~icons/ph/map-pin-fill'
import Toolbox from '~icons/fluent-emoji/toolbox'

export default {
	props: {
		name: String,
		classNames: String,
	},
	components: {
		Briefcase,
		Browser,
		ChatsCircle,
		Envelope,
		FlagEnglish,
		FlagEsperanto,
		FlagFrench,
		FlagGerman,
		Globe,
		GraduationCap,
		LightBulb,
		LinkedInLogo,
		PenNib,
		Phone,
		PushPin,
		Toolbox,
	}
}

</script>

<template>
	<Briefcase v-if="name === 'briefcase'" :class="classNames" />
	<Browser v-if="name === 'browser'" :class="classNames" />
	<ChatsCircle v-if="name === 'chats-circle'" :class="classNames" />
	<Envelope v-if="name === 'envelope'" :class="classNames" />
	<FlagEnglish v-if="name === 'flag-en'" :class="classNames" /> 
	<FlagEsperanto v-if="name === 'flag-eo'" class="-hue-rotate-[115deg]" :class="classNames" /> 
	<FlagFrench v-if="name === 'flag-fr'" :class="classNames" /> 
	<FlagGerman v-if="name === 'flag-de'" :class="classNames" /> 
	<Globe v-if="name === 'globe'" :class="classNames" /> 
	<GraduationCap v-if="name === 'graduation-cap'" :class="classNames" /> 
	<LightBulb v-if="name === 'light-bulb'" :class="classNames" /> 
	<LinkedInLogo v-if="name === 'linkedin-logo'" :class="classNames" /> 
	<PenNib v-if="name === 'pen-nib'" :class="classNames" /> 
	<Phone v-if="name === 'phone'" :class="classNames" /> 
	<PushPin v-if="name === 'push-pin'" :class="classNames" /> 
	<Toolbox v-if="name === 'toolbox'" :class="classNames" /> 
</template>