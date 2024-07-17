<template>
	<div>
		<div class="main-container">
			<div class="editor-container editor-container_classic-editor" ref="editorContainerElement">
				<div class="editor-container__editor">
					<div ref="editorElement">
						<ckeditor 
              v-if="isLayoutReady" 
              v-model="config.initialData" 
              :editor="editor" 
              :config="config" 
            />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import 'ckeditor5/ckeditor5.css';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

import {
	ClassicEditor,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoLink,
	Autosave,
	BlockQuote,
	Bold,
	CodeBlock,
	Essentials,
	FindAndReplace,
	Heading,
	HorizontalLine,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
  ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	Paragraph,
	SelectAll,
	TextTransformation,
	Undo,
  SimpleUploadAdapter
} from 'ckeditor5';



export default {
	name: 'app',
	data() {
		return {
			isLayoutReady: false,
			config: null, // CKEditor needs the DOM tree before calculating the configuration.
			editor: ClassicEditor
		};
	},
	mounted() {
		this.config = {
			toolbar: {
				items: [
					'undo',
					'redo',
					'|',
					'findAndReplace',
					'selectAll',
					'|',
					'heading',
					'|',
					'bold',
					'italic',
					'|',
					'horizontalLine',
					'link',
					'insertImage',
					'blockQuote',
					'codeBlock',
					'|',
					'alignment',
					'|',
					'indent',
					'outdent',
					'|',
					'accessibilityHelp'
				],
				shouldNotGroupWhenFull: false
			},
			plugins: [
				AccessibilityHelp,
				Alignment,
				Autoformat,
				AutoLink,
				Autosave,
				BlockQuote,
				Bold,
				CodeBlock,
				Essentials,
				FindAndReplace,
				Heading,
				HorizontalLine,
				ImageBlock,
				ImageCaption,
				ImageInline,
				ImageInsertViaUrl,
				ImageResize,
				ImageStyle,
				ImageTextAlternative,
				ImageToolbar,
        ImageUpload,
				Indent,
				IndentBlock,
				Italic,
				Link,
				LinkImage,
				Paragraph,
				SelectAll,
				TextTransformation,
				Undo,
        SimpleUploadAdapter
			],
			heading: {
				options: [
					{
						model: 'paragraph',
						title: 'Paragraph',
						class: 'ck-heading_paragraph'
					},
					{
						model: 'heading1',
						view: 'h1',
						title: 'Heading 1',
						class: 'ck-heading_heading1'
					},
					{
						model: 'heading2',
						view: 'h2',
						title: 'Heading 2',
						class: 'ck-heading_heading2'
					},
					{
						model: 'heading3',
						view: 'h3',
						title: 'Heading 3',
						class: 'ck-heading_heading3'
					},
					{
						model: 'heading4',
						view: 'h4',
						title: 'Heading 4',
						class: 'ck-heading_heading4'
					},
					{
						model: 'heading5',
						view: 'h5',
						title: 'Heading 5',
						class: 'ck-heading_heading5'
					},
					{
						model: 'heading6',
						view: 'h6',
						title: 'Heading 6',
						class: 'ck-heading_heading6'
					}
				]
			},
			image: {
				toolbar: [
					'toggleImageCaption',
					'imageTextAlternative',
					'|',
					'imageStyle:inline',
					'imageStyle:wrapText',
					'imageStyle:breakText',
					'|',
					'resizeImage'
				]
			},
			initialData:'',
			link: {
				addTargetToExternalLinks: true,
				defaultProtocol: 'https://',
				decorators: {
					toggleDownloadable: {
						mode: 'manual',
						label: 'Downloadable',
						attributes: {
							download: 'file'
						}
					}
				}
			},
			placeholder: 'شروع به نوشتن کنید ...',
      language: {
        ui: 'fa', // تنظیم زبان رابط کاربری به فارسی
        content: 'fa' // تنظیم زبان محتوای ویرایشگر به فارسی
      },
      simpleUpload: {
        uploadUrl: this.globalUrl + 'api/mag/ckeditor/upload',
        headers: {
          'Authorization': 'Bearer '+ this.$cookies.get("_token")
        }
      }
		};

		this.isLayoutReady = true;
	},
  methods: {
    clearCkData() {
      this.config.initialData = ''
    }
  }
};
</script>
