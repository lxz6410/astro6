import { RootNode } from './ast.js';
export { AttributeNode, BaseNode, CommentNode, ComponentNode, CustomElementNode, DoctypeNode, ElementNode, ExpressionNode, FragmentNode, FrontmatterNode, LiteralNode, Node, ParentLikeNode, ParentNode, Point, Position, TagLikeNode, TextNode, ValueNode } from './ast.js';
import { DiagnosticCode } from './diagnostics.js';

interface PreprocessorResult {
    code: string;
    map?: string;
}
interface PreprocessorError {
    error: string;
}
interface ParseOptions {
    position?: boolean;
}
declare enum DiagnosticSeverity {
    Error = 1,
    Warning = 2,
    Information = 3,
    Hint = 4
}
interface DiagnosticMessage {
    severity: DiagnosticSeverity;
    code: DiagnosticCode;
    location: DiagnosticLocation;
    hint?: string;
    text: string;
}
interface DiagnosticLocation {
    file: string;
    line: number;
    column: number;
    length: number;
}
interface TransformOptions {
    internalURL?: string;
    filename?: string;
    normalizedFilename?: string;
    sourcemap?: boolean | 'inline' | 'external' | 'both';
    astroGlobalArgs?: string;
    compact?: boolean;
    resultScopedSlot?: boolean;
    scopedStyleStrategy?: 'where' | 'class' | 'attribute';
    /**
     * @deprecated "as" has been removed and no longer has any effect!
     */
    as?: 'document' | 'fragment';
    experimentalTransitions?: boolean;
    experimentalPersistence?: boolean;
    transitionsAnimationURL?: string;
    resolvePath?: (specifier: string) => Promise<string>;
    preprocessStyle?: (content: string, attrs: Record<string, string>) => null | Promise<PreprocessorResult | PreprocessorError>;
}
type ConvertToTSXOptions = Pick<TransformOptions, 'filename' | 'normalizedFilename'>;
type HoistedScript = {
    type: string;
} & ({
    type: 'external';
    src: string;
} | {
    type: 'inline';
    code: string;
    map: string;
});
interface HydratedComponent {
    exportName: string;
    specifier: string;
    resolvedPath: string;
}
interface TransformResult {
    code: string;
    map: string;
    scope: string;
    styleError: string[];
    diagnostics: DiagnosticMessage[];
    css: string[];
    scripts: HoistedScript[];
    hydratedComponents: HydratedComponent[];
    clientOnlyComponents: HydratedComponent[];
    containsHead: boolean;
}
interface SourceMap {
    file: string;
    mappings: string;
    names: string[];
    sources: string[];
    sourcesContent: string[];
    version: number;
}
interface TSXResult {
    code: string;
    map: SourceMap;
    diagnostics: DiagnosticMessage[];
}
interface ParseResult {
    ast: RootNode;
    diagnostics: DiagnosticMessage[];
}
declare function transform(input: string, options?: TransformOptions): Promise<TransformResult>;
declare function parse(input: string, options?: ParseOptions): Promise<ParseResult>;
declare function convertToTSX(input: string, options?: ConvertToTSXOptions): Promise<TSXResult>;
declare function initialize(options: InitializeOptions): Promise<void>;
/**
 * When calling the core compiler APIs, e.g. `transform`, `parse`, etc, they
 * would automatically instantiate a WASM instance to process the input. When
 * done, you can call this to manually teardown the WASM instance.
 *
 * If the APIs are called again, they will automatically instantiate a new WASM
 * instance. In browsers, you have to call `initialize()` again before using the APIs.
 *
 * Note: Calling teardown is optional and exists mostly as an optimization only.
 */
declare function teardown(): void;
interface InitializeOptions {
    wasmURL?: string;
}

export { ConvertToTSXOptions, DiagnosticLocation, DiagnosticMessage, DiagnosticSeverity, HoistedScript, HydratedComponent, InitializeOptions, ParseOptions, ParseResult, PreprocessorError, PreprocessorResult, RootNode, SourceMap, TSXResult, TransformOptions, TransformResult, convertToTSX, initialize, parse, teardown, transform };
