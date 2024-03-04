// // src/editor/SmartEditor.js

// function initEditor(id = "content") { // id 는 textarea 의 아이디

// 	typeof window.nhn == "undefined" && (window.nhn = {});
// 	!window.nhn.husky && (window.nhn.husky = {});
// 	var nhn = window.nhn;

// 	/**
// 	 * @fileOverview This file contains application creation helper function, which would load up an HTML(Skin) file and then execute a specified create function.
// 	 * @name HuskyEZCreator.js
// 	 */
// 	nhn.husky.EZCreator = new (() => {
// 		this.nBlockerCount = 0;

// 		this.createInIFrame = (htOptions) => {
// 			if (arguments.length == 1) {
// 				var oAppRef = htOptions.oAppRef;
// 				var elPlaceHolder = htOptions.elPlaceHolder;
// 				var sSkinURI = htOptions.sSkinURI;
// 				var fCreator = htOptions.fCreator;
// 				var fOnAppLoad = htOptions.fOnAppLoad;
// 				var bUseBlocker = htOptions.bUseBlocker;
// 				var htParams = htOptions.htParams || null;
// 			} else {
// 				// for backward compatibility only
// 				var oAppRef = arguments[0];
// 				var elPlaceHolder = arguments[1];
// 				var sSkinURI = arguments[2];
// 				var fCreator = arguments[3];
// 				var fOnAppLoad = arguments[4];
// 				var bUseBlocker = arguments[5];
// 				var htParams = arguments[6];
// 			}

// 			bUseBlocker && nhn.husky.EZCreator.showBlocker();
// 			var attachEvent = (elNode, sEvent, fHandler) => {
// 				elNode.addEventListener
// 					? elNode.addEventListener(sEvent, fHandler, false)
// 					: elNode.attachEvent("on" + sEvent, fHandler);
// 			}
// 			if (!elPlaceHolder) {
// 				alert("Placeholder is required!");
// 				return;
// 			}
// 			typeof (elPlaceHolder) != "object" && (elPlaceHolder = document.getElementById(elPlaceHolder));
// 			var elIFrame, nEditorHeight;
// 			try {
// 				elIFrame = document.createElement("<iframe frameborder=0 scrolling=no>");
// 			} catch (e) {
// 				elIFrame = document.createElement("iframe");
// 				elIFrame.setAttribute("frameborder", "0");
// 				elIFrame.setAttribute("scrolling", "no");
// 			}
// 			elIFrame.style.width = "1px";
// 			elIFrame.style.height = "1px";
// 			console.log(elPlaceHolder.parentNode);
// 			elPlaceHolder.parentNode.insertBefore(elIFrame, elPlaceHolder.nextSibling);

// 			attachEvent(elIFrame, "load", () => {
// 				fCreator = elIFrame.contentWindow[fCreator] || elIFrame.contentWindow.createSEditor2;
// 				try {
// 					nEditorWidth = elIFrame.contentWindow.document.body.scrollWidth || "500px";
// 					nEditorHeight = elIFrame.contentWindow.document.body.scrollHeight + 12;
// 					elIFrame.style.width = "100%";
// 					elIFrame.style.height = nEditorHeight + "px";
// 					elIFrame.contentWindow.document.body.style.margin = "0";
// 				} catch (e) {
// 					nhn.husky.EZCreator.hideBlocker(true);
// 					elIFrame.style.border = "5px solid red";
// 					elIFrame.style.width = "500px";
// 					elIFrame.style.height = "500px";
// 					alert("Failed to access " + sSkinURI);
// 					return;
// 				}
// 				var oApp = fCreator(elPlaceHolder, htParams);	// oEditor
// 				oApp.elPlaceHolder = elPlaceHolder;
// 				oAppRef[oAppRef.length] = oApp;
// 				!oAppRef.getById && (oAppRef.getById = {});
// 				elPlaceHolder.id && (oAppRef.getById[elPlaceHolder.id] = oApp);

// 				oApp.run({ fnOnAppReady: fOnAppLoad });

// 				// top.document.title += ", "+((new Date())-window.STime);
// 				nhn.husky.EZCreator.hideBlocker();
// 			});
// 			// window.STime = new Date();
// 			elIFrame.src = sSkinURI;
// 			this.elIFrame = elIFrame;
// 		};

// 		this.showBlocker = () => {
// 			if (this.nBlockerCount < 1) {
// 				var elBlocker = document.createElement("div");
// 				elBlocker.style.position = "absolute";
// 				elBlocker.style.top = 0;
// 				elBlocker.style.left = 0;
// 				elBlocker.style.backgroundColor = "#FFFFFF";
// 				elBlocker.style.width = "100%";
// 				document.body.appendChild(elBlocker);
// 				nhn.husky.EZCreator.elBlocker = elBlocker;
// 			}
// 			nhn.husky.EZCreator.elBlocker.style.height = Math.max(document.body.scrollHeight, document.body.clientHeight) + "px";
// 			this.nBlockerCount++;
// 		};

// 		this.hideBlocker = function (bForce) {
// 			if (!bForce && --this.nBlockerCount > 0) return;
// 			this.nBlockerCount = 0;
// 			nhn.husky.EZCreator.elBlocker && (nhn.husky.EZCreator.elBlocker.style.display = "none");
// 		}
// 	})();


// 	// 추가 글꼴 목록
// 	// var aAdditionalFontSet = [["MS UI Gothic", "MS UI Gothic"], ["Comic Sans MS", "Comic Sans MS"],["TEST","TEST"]];

// 	const oEditors = [];

// 	window.nhn.husky.EZCreator.createInIFrame({
// 		oAppRef: oEditors,
// 		elPlaceHolder: id,
// 		sSkinURI: "/static/SmartEditor/SmartEditor2Skin.html",
// 		htParams: {
// 			bUseToolbar: true,				// 툴바 사용 여부 (true:사용/ false:사용하지 않음)
// 			bUseVerticalResizer: true,		// 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음)
// 			bUseModeChanger: true,			// 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음)
// 			//aAdditionalFontList : aAdditionalFontSet,		// 추가 글꼴 목록
// 			fOnBeforeUnload: () => {
// 				//alert("완료!");
// 			}
// 		}, //boolean
// 		fOnAppLoad: () => {
// 			//예제 코드
// 			//oEditors.getById["ir1"].exec("PASTE_HTML", ["로딩이 완료된 후에 본문에 삽입되는 text입니다."]);
// 		},
// 		fCreator: "createSEditor2"
// 	});

// 	const pasteHTML = () => {
// 		var sHTML = "<span style="color: #FF0000; ">이미지도 같은 방식으로 삽입합니다.<\/span>";
// 		oEditors.getById[id].exec("PASTE_HTML", [sHTML]);
// 	}

// 	const showHTML = () => {
// 		var sHTML = oEditors.getById[id].getIR();
// 		alert(sHTML);
// 	}

// 	const setDefaultFont = () => {
// 		var sDefaultFont = "궁서";
// 		var nFontSize = 24;
// 		oEditors.getById[id].setDefaultFont(sDefaultFont, nFontSize);
// 	}

// 	// SmartEditor 에 입력한 내용을 textarea 에 변환하는 함수
// 	oEditors.exec = () => {
// 		this.getById[id].exec("UPDATE_CONTENTS_FIELD", []);
// 	}

// 	return oEditors;
// }

// export { initEditor } 