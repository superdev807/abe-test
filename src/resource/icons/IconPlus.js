import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

function IconPlus(props) {
    return (
        <SvgIcon viewBox="0 0 26 26" xmlSpace="preserve" {...props}>
            <g filter="url(#filter0_d)">
                <circle cx="13" cy="12" r="10" fill="#0C40FC" />
                <path
                    d="M17.2867 12.5221L17.2867 11.5726L13.5222 11.5726L13.5222 7.8081L12.5726 7.8081L12.5726 11.5726L8.80811 11.5726L8.80811 12.5221L12.5726 12.5221L12.5726 16.2866L13.5222 16.2866L13.5222 12.5221L17.2867 12.5221Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter id="filter0_d" x="0" y="0" width="26" height="26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </SvgIcon>
    );
}

export default IconPlus;
