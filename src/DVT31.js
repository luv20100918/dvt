import React from 'react'
import './DVT31.css'

export default function DVT31({ no, type, d1, d2 }) {

    const d1Arr = d1.toString().split('');

    // const c1 = Number(d1Arr[0] + "00");
    const d3 = d2 * 100;
    const v1 = Math.trunc(d1 / d3);
    const n1 = d1 % d3;
    const a1 = v1 * d2;

    const n1Arr = n1.toString().split('');

    const n1Count = n1Arr.length; // 나머지가 두자리냐 한자리냐 없냐
    const v2 = Math.trunc(n1 / (d2 * 10));
    const n2 = n1 % (d2 * 10);
    const b = v2 * d2;
    const bArr = b.toString().split('');

    const n2Arr = n2.toString().split('');

    const v3 = Math.trunc(n2 / d2);

    const c = v3 * d2;
    const cArr = c.toString().split('');

    const n3 = n2 % d2;


    return (
        <div className='dvt31'>
            <h3>{no})</h3>
            <div className='cal-line'>
                <div className='box'></div>
                <div className='temp'></div>
                <div className='box'>{type == 'question' && '\u00A0'}{type == 'answer' && (v1 > 0 ? v1 : '')}</div>
                <div className='box'>{type == 'question' && '\u00A0'}{type == 'answer' && (v2 > 0 || v1 > 0 ? v2 : '')}</div>
                <div className='box'>{type == 'question' && '\u00A0'}{type == 'answer' && v3}</div>
            </div>
            <div className='cal-line'>
                <div className='box'>{d2}</div>
                <div className='temp'>
                    <div className='circle'>&nbsp;</div>
                    <div className='left-box'>&nbsp;</div>
                    <div className='right-top-line'>&nbsp;</div>
                </div>
                <div className='box top-line'>{d1Arr[0]}</div>
                <div className='box top-line'>{d1Arr[1]}</div>
                <div className='box top-line'>{d1Arr[2]}</div>
            </div>
            {a1 > 0 &&
                <>
                    <div className='cal-line'>
                        <div className='box'></div>
                        <div className='temp'></div>
                        <div className='box'>{type == 'question' && '\u00A0'}{type == 'answer' && a1}</div>
                        <div className='box'></div>
                        <div className='box'></div>
                    </div>
                    <div className='cal-line'>
                        <div className='box'></div>
                        <div className='temp'></div>
                        <div className='box top-line'>{type == 'question' && '\u00A0'}{type == 'answer' && (n1Count == 3 && n1Arr[0])}</div>
                        <div className='box top-line'>{type == 'question' && '\u00A0'}{type == 'answer' && (n1Count == 3 && n1Arr[1])}{type == 'answer' && (n1Count == 2 && n1Arr[0])}</div>
                        <div className='box top-line'>{type == 'question' && '\u00A0'}{type == 'answer' && (n1Count == 3 && n1Arr[2])}{type == 'answer' && (n1Count == 2 && n1Arr[1])}{type == 'answer' && (n1Count == 1 && n1Arr[0])}</div>
                    </div>
                </>
            }
            {n1 > 0 &&
            <>
            {b > 0 && <>
            <div className='cal-line'>
                <div className='box'></div>
                <div className='temp'></div>
                <div className='box'>{type == 'question' && '\u00A0'}{type == 'answer' && (bArr.length == 2 && bArr[0])}</div>
                <div className='box'>{type == 'question' && '\u00A0'}{type == 'answer' && (bArr.length == 2 && bArr[1])}{type == 'answer' && (bArr.length == 1 && bArr[0])}</div>
                <div className='box'></div>
            </div>
            <div className='cal-line'>
                <div className='box'></div>
                <div className='temp'></div>
                <div className='box top-line'></div>
                <div className='box top-line'>{type == 'question' && '\u00A0'}{type == 'answer' && (n2Arr.length == 2 && n2Arr[0])}</div>
                <div className='box top-line'>{type == 'question' && '\u00A0'}{type == 'answer' && (n2Arr.length == 2 && n2Arr[1])}{type == 'answer' && (n2Arr.length == 1 && n2Arr[0])}</div>
            </div>
            </>
            }
            {c > 0 &&
            <>
                        <div className='cal-line'>
                <div className='box'></div>
                <div className='temp'></div>
                <div className='box'></div>
                <div className='box'>{type == 'question' && '\u00A0'}{type == 'answer' && (cArr.length == 2 && cArr[0])}</div>
                <div className='box'>{type == 'question' && '\u00A0'}{type == 'answer' && (cArr.length == 2 && cArr[1])}{type == 'answer' && (cArr.length == 1 && cArr[0])}</div>
            </div>
            <div className='cal-line'>
                <div className='box'></div>
                <div className='temp'></div>
                <div className='box top-line'></div>
                <div className='box top-line'></div>
                <div className='box top-line'>{type == 'answer' && n3}{type == 'question' && '\u00A0'}</div>
            </div>
            </>
            }

            </>
            }
        </div>
    )
}
